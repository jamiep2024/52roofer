// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Remove multiple slashes
  if (url.pathname.match(/\/+/g)) {
    const cleanPath = url.pathname.replace(/\/+/g, "/");
    if (cleanPath !== url.pathname) {
      return NextResponse.redirect(new URL(cleanPath, request.url));
    }
  }

  // Remove trailing slash except for root
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    return NextResponse.redirect(
      new URL(url.pathname.slice(0, -1), request.url),
    );
  }

  // Handle common case mismatches
  const lowerPath = url.pathname.toLowerCase();
  if (url.pathname !== lowerPath) {
    return NextResponse.redirect(new URL(lowerPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
