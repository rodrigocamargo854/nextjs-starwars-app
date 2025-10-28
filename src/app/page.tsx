"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import {
  planetsAtom, pageAtom, searchAtom, loadingAtom,
  UI_LABELS, FILM_TITLES, getFilmId
} from "@/store/planetsStore";

import { getPlanets } from "./lib/api/starwars/api";
import { Card } from "@/components/Card/Index";

function getIdFromUrl(url: string) {
  if (!url) return "";
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1] || "";
}

export default function Home() {
  const [planets, setPlanets] = useAtom(planetsAtom);
  const [page, setPage] = useAtom(pageAtom);
  const [search, setSearch] = useAtom(searchAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      try {
        const res = await getPlanets(page, search);

        const augmentedResults = (res.results ?? []).map((p: any) => {
          const filmNames = Array.isArray(p.films) && p.films.length
            ? p.films
                .map((filmUrl: string) => {
                  const fid = getFilmId(filmUrl);
                  return FILM_TITLES[fid] ?? `Episode ${fid}`;
                })
                .join(", ")
            : UI_LABELS.none;

          return { ...p, filmNames };
        });

        if (alive) {
          setPlanets({
            count: res.count ?? 0,
            results: augmentedResults,
          });
        }
      } finally {
        setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, [page, search, setPlanets, setLoading]);

  const totalPages = Math.max(1, Math.ceil(planets.count / 10));

  return (
    <main className="flex flex-col min-h-screen items-center p-8 bg-white dark:bg-zinc-950">
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
        <h1 className="text-lg font-bold md:text-2xl">{UI_LABELS.title}</h1>
        <input
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder={UI_LABELS.searchPlaceholder}
          className="border rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-900 w-full md:w-auto"
        />
      </div>

      {loading && <p className="text-sm text-zinc-500 mb-4">{UI_LABELS.loading}</p>}

      <ul className="grid gap-6 w-full max-w-5xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-none">
        {planets.results.map((planet: any) => {
          const id = getIdFromUrl(planet.url);
          return (
            <li key={planet.url}>
              <Card
                href={`/planets/${id}`}
                title={planet.name}
                info={[
                  `${UI_LABELS.terrain}: ${planet.terrain || UI_LABELS.unknown}`,
                  `${UI_LABELS.diameter}: ${planet.diameter || UI_LABELS.unknown}`,
                  `${UI_LABELS.climate}: ${planet.climate || UI_LABELS.unknown}`,
                  `${UI_LABELS.films}: ${planet.filmNames}`, // <- usa o campo preparado
                ]}
              />
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex items-center gap-3">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="border rounded px-3 py-2 text-sm disabled:opacity-50"
        >
          {UI_LABELS.prev}
        </button>
        <span className="text-sm">{`${UI_LABELS.page} ${page} of ${totalPages}`}</span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
          className="border rounded px-3 py-2 text-sm disabled:opacity-50"
        >
          {UI_LABELS.next}
        </button>
      </div>
    </main>
  );
}
