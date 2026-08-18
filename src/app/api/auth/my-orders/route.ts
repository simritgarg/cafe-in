import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/session";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session")?.value;

    if (!sessionToken) {
      return Response.json({ error: "Not authenticated" }, { status: 401 });
    }

    const session = await verifySession(sessionToken);

    if (!session) {
      return Response.json(
        { error: "Invalid or expired session" },
        { status: 401 },
      );
    }

    const orders = await prisma.order.findMany({
      where: {
        userId: session.userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    return Response.json(orders);
  } catch (error) {
    console.error("Failed to fetch user orders:", error);

    return Response.json(
      { error: "Failed to fetch user orders" },
      { status: 500 },
    );
  }
}
