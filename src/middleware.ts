import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
// import { ratelimit } from "./server/ratelimit";

export async function middleware(
  request: NextRequest,
  event: NextFetchEvent,
): Promise<NextResponse | undefined> {
    
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  //   //rate limiting
  //   const ip = request.ip ?? "127.0.0.1";
  //   const { success } = await ratelimit.limit(ip); //if the same ip address makes more than 5 requests in 10 seconds...
  //   return success
  //     ? NextResponse.next({ headers })
  //     : NextResponse.redirect(new URL("/blocked", request.url));
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
