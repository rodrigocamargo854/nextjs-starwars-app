import { NextResponse } from "next/server";
export const revalidate = 60;

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SWAPI}/planets/${params.id}/`, {
    next: { revalidate },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: true, message: "Failed to fetch planet" },
      { status: res.status }
    );
  }

  const json = await res.json();
  return NextResponse.json(json, {
    headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=120" },
  });
}
