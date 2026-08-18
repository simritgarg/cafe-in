import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/session";
import { getCurrentUser } from "@/lib/session";

type OrderRequestItem = {
  productId: number;
  quantity: number;
};

type OrderRequest = {
  items: OrderRequestItem[];
};

export async function GET() {
  const user = await getCurrentUser();

  if (!user || !user.isAdmin) {
    return Response.json({ error: "Admin access required" }, { status: 403 });
  }
  try {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            createdAt: true,
          },
        },
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    return Response.json(orders);
  } catch (error) {
    console.error("Failed to fetch orders:", error);

    return Response.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session")?.value;

    let userId: number | undefined;

    if (sessionToken) {
      const session = await verifySession(sessionToken);

      if (session) {
        userId = session.userId;
      }
    }

    const body: OrderRequest = await request.json();

    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { error: "Order must contain at least one item." },
        { status: 400 },
      );
    }

    const productIds = body.items.map((item) => item.productId);

    const products = await prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    if (products.length !== productIds.length) {
      return NextResponse.json(
        { error: "One or more products could not be found." },
        { status: 400 },
      );
    }

    let total = 0;

    const orderItems = body.items.map((item) => {
      const product = products.find((product) => product.id === item.productId);

      if (!product) {
        throw new Error("Product not found.");
      }

      if (item.quantity <= 0) {
        throw new Error("Quantity must be greater than zero.");
      }

      total += product.price * item.quantity;

      return {
        productId: product.id,
        quantity: item.quantity,
        price: product.price,
      };
    });

    const order = await prisma.order.create({
      data: {
        id: `CAFE-${Date.now()}`,
        total,
        userId,
        items: {
          create: orderItems,
        },
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("Order creation failed:", error);

    return NextResponse.json(
      { error: "Failed to create order." },
      { status: 500 },
    );
  }
}
