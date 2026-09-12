import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

// TEMPORARY diagnostic route — reports facts about env vars without ever
// exposing their actual content. Remove once the ByteString bug is fixed.
function inspect(name: string) {
  const value = process.env[name];
  if (value === undefined) {
    return { name, present: false };
  }

  let firstBadChar: { index: number; codePoint: number } | null = null;
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code > 255) {
      firstBadChar = { index: i, codePoint: code };
      break;
    }
  }

  const trimmed = value.trim();

  return {
    name,
    present: true,
    length: value.length,
    trimmedLength: trimmed.length,
    hasLeadingOrTrailingWhitespace: trimmed.length !== value.length,
    firstCharCode: value.charCodeAt(0),
    lastCharCode: value.charCodeAt(value.length - 1),
    firstBadChar,
  };
}

export async function GET() {
  return NextResponse.json(
    {
      checkedAt: new Date().toISOString(),
      NEXT_PUBLIC_SUPABASE_URL: inspect("NEXT_PUBLIC_SUPABASE_URL"),
      SUPABASE_SERVICE_ROLE_KEY: inspect("SUPABASE_SERVICE_ROLE_KEY"),
      RESEND_API_KEY: inspect("RESEND_API_KEY"),
      DEBUG_TEST_VAR: inspect("DEBUG_TEST_VAR"),
    },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
