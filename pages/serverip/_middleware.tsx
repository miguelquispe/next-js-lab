import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const ip = req.ip || "x.x.x.x";
  const response = NextResponse.next();

  response.headers.set("X-MQ-Header", "Get ip from next/server");
  response.headers.set("X-MQ-IP", ip);

  return response;
}
