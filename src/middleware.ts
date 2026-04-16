import { NextResponse, type NextRequest } from "next/server";

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER ?? "bitexen";
const BASIC_AUTH_PASS = process.env.BASIC_AUTH_PASS ?? "bitexen2026";

export function middleware(request: NextRequest) {
  const auth = request.headers.get("authorization");

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = Buffer.from(encoded, "base64").toString("utf-8");
      const [user, pass] = decoded.split(":");
      if (user === BASIC_AUTH_USER && pass === BASIC_AUTH_PASS) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Bitexen MVNO Proposal", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
