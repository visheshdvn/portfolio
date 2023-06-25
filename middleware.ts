import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const session = await getToken({
      req: request,
      secret: process.env.TOKEN_SECRET,
    });
    if (!session) {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
    NextResponse.next();
  }

  //
  if (request.nextUrl.pathname.startsWith("/auth")) {
    const session = await getToken({
      req: request,
      secret: process.env.TOKEN_SECRET,
    });
    if (session) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*", "/auth/:path*"],
};
