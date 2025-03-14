import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  const userRoutes = ["/dashboard", "/myplan", "/wents"];
  const adminRoutes = ["/admin"];
  const authRoutes = ["/auth/login", "/auth/register"];
  const rootRoute = "/"; // Define the root route

  // Prevent authenticated users from accessing auth pages
  if (authRoutes.includes(pathname)) {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  // Prevent admins from accessing the root route (/)
  if (pathname === rootRoute) {
    if (token && token.role === "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    return NextResponse.next();
  }

  // Protect user routes: only allow users (non-admins) or redirect to login if unauthenticated
  if (userRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
    if (token.role === "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  // Protect admin routes: only allow admins or redirect to login if unauthenticated
  if (adminRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/myplan/:path*", "/wents/:path*", "/auth/:path*", "/admin/:path*"],
};