import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") ?? "1";
  const search = searchParams.get("search") ?? "";

  const url = `${process.env.NEXT_PUBLIC_SWAPI}/planets/?page=${page}&search=${encodeURIComponent(search)}`;
  const res = await fetch(url, { next: { revalidate } });

  if (!res.ok) {
    return NextResponse.json(
      { error: true, message: "Failed to fetch planets" },
      { status: res.status }
    );
  }

  const json = await res.json();

  const results = Array.isArray(json.results)
    ? [...json.results].sort((a, b) =>
        String(a.name).localeCompare(String(b.name), "en", { sensitivity: "base" })
      )
    : [];

  return NextResponse.json(
    { ...json, results },
    {
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=120",
      },
    }
  );
}
