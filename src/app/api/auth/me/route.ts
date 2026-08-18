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

    const user = await prisma.user.findUnique({
      where: {
        id: session.userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        isAdmin: true,
      },
    });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    return Response.json(user);
  } catch (error) {
    console.error("Failed to get current user:", error);

    return Response.json(
      { error: "Failed to get current user" },
      { status: 500 },
    );
  }
}
