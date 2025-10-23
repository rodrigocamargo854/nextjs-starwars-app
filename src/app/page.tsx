import { Card } from "@/components/Card/Index";
import { getPlanets } from "./lib/api/starwars/api";

export const dynamic = "force-dynamic";

async function fetchFilmTitle(url: string, cache: Map<string, string>) {
  if (cache.has(url)) return cache.get(url)!;
  const res = await fetch(url, { next: { revalidate: 0 } });
  if (!res.ok) return "Unknown";
  const json = await res.json();
  const title = typeof json?.title === "string" ? json.title : "Unknown";
  cache.set(url, title);
  return title;
}

export default async function Home() {
  const data = await getPlanets();

  const filmCache = new Map<string, string>();
  const enriched = await Promise.all(
    (data.results ?? []).map(async (p: any) => {
      const filmTitles = Array.isArray(p.films) && p.films.length
        ? await Promise.all(p.films.map((u: string) => fetchFilmTitle(u, filmCache)))
        : [];
      return { ...p, filmTitles };
    })
  );

  return (
    <main className="flex flex-col min-h-screen items-center p-8 bg-white dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-6">Star Wars Planets</h1>
      <ul className="grid gap-6 w-full max-w-5xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-none">
        {enriched.map((p: any) => {
          const id = p.url.split("/").filter(Boolean).pop();
          const films = p.filmTitles.length ? p.filmTitles.join(", ") : "None";
          return (
            <li key={p.name}>
              <Card
                href={`/planets/${id}`}
                title={p.name}
                info={[
                  `Terrain: ${p.terrain ?? "Unknown"}`,
                  `Diameter: ${p.diameter ?? "Unknown"}`,
                  `Climate: ${p.climate ?? "Unknown"}`,
                  `Films: ${films}`,
                ]}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
