import { Card } from "../components/Card/Index";
import { getPlanets } from "./lib/api/starwars/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getPlanets();

  return (
    <main className="flex flex-col min-h-screen items-center p-8 bg-white dark:bg-zinc-950">
      <h1 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300">
         Star Wars Planets
      </h1>

      <ul className="grid gap-5 w-full max-w-5xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-none">
        {data.results.map((p: any) => {
          const id = p.url.split("/").filter(Boolean).pop();
          return (
            <Card
              key={p.name}
              href={`/planets/${id}`}
              title={p.name}
              info={[`Clima: ${p.climate}`, `Terreno: ${p.terrain}`]}
            />
          );
        })}
      </ul>
    </main>
  );
}
