import { NextResponse } from "next/server";
import { useSelector } from "react-redux";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/checkout",
};
