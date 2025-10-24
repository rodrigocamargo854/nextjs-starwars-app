"use client";

import { useEffect, useState } from "react";
import { getPlanets } from "./lib/api/starwars/api";
import { Card } from "@/components/Card/Index";
import { ApiResponse } from "./lib/api/types";

function getIdFromUrl(url: string) {
  return url.split("/").filter(Boolean).pop()!;
}

const filmTitles: Record<string, string> = {
  "1": "A New Hope",
  "2": "The Empire Strikes Back",
  "3": "Return of the Jedi",
  "4": "The Phantom Menace",
  "5": "Attack of the Clones",
  "6": "Revenge of the Sith",
  "7": "The Force Awakens",
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<ApiResponse>({ count: 0, results: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      try {
        const res = await getPlanets(page, search);
        if (alive) setData({ count: res.count ?? 0, results: res.results ?? [] });
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [page, search]);

  const totalPages = Math.max(1, Math.ceil(data.count / 10));

  return (
    <main className="flex flex-col min-h-screen items-center p-8 bg-white dark:bg-zinc-950">
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
        <h1 className="text-lg font-bold md:text-2xl">Star Wars Planets</h1>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search by name..."
          className="border rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-900 w-full md:w-auto"
        />
      </div>

      {loading && <p className="text-sm text-zinc-500 mb-4">Loading...</p>}

      <ul className="grid gap-6 w-full max-w-5xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-none">
        {data.results.map((p) => {
          const id = getIdFromUrl(p.url);
          const filmNames = p.films?.length
            ? p.films
                .map((f: string) => {
                  const filmId = getIdFromUrl(f);
                  return filmTitles[filmId] || `Episode ${filmId}`;
                })
                .join(", ")
            : "None";

          return (
            <li key={p.url}>
              <Card
                href={`/planets/${id}`}
                title={p.name}
                info={[
                  `Terrain: ${p.terrain || "Unknown"}`,
                  `Diameter: ${p.diameter || "Unknown"}`,
                  `Climate: ${p.climate || "Unknown"}`,
                  `Films: ${filmNames}`,
                ]}
              />
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex items-center gap-3">
        <button
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
          className="border rounded px-3 py-2 text-sm disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm">Page {page} of {totalPages}</span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="border rounded px-3 py-2 text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
}
