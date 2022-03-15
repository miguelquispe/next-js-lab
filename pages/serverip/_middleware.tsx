import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const ip = req.ip || "0.0.0.0";
  const response = NextResponse.next();

  response.headers.set("X-MQ-Header", "Get ip from next/server");
  response.headers.set("X-MQ-IP", ip);

  return response;
}
