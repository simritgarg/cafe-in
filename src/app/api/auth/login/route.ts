import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        {
          error: "Email and password are required",
        },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return Response.json(
        {
          error: "Invalid email or password",
        },
        { status: 401 },
      );
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return Response.json(
        {
          error: "Invalid email or password",
        },
        { status: 401 },
      );
    }
    const sessionToken = await createSession(user.id);
    return new Response(
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": `session=${sessionToken}; HttpOnly; Path=/; Max-Age=604800; SameSite=Lax`,
        },
      },
    );
  } catch (error) {
    console.error("Failed to login:", error);

    return Response.json({ error: "Failed to login" }, { status: 500 });
  }
}
