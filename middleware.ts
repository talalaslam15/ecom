import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if user is authenticated by looking for auth-token cookie
  // The auth system sets this to the user's ID when logged in
  const authToken = request.cookies.get("auth-token")?.value;
  const isAuthenticated = authToken && authToken !== "";

  // Protected dashboard routes
  const isDashboardRoute = pathname.startsWith("/dashboard");

  // Auth routes (login, register)
  const isAuthRoute = pathname.startsWith("/auth");

  // If user is not authenticated and trying to access dashboard
  if (isDashboardRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // If user is authenticated and trying to access auth pages
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
