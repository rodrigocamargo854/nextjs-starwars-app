import Link from "next/link";
import { getPlanets } from "../lib/api/starwars/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getPlanets();

  return (
    <main className="flex flex-col min-h-screen items-center p-8 bg-zinc-50 dark:bg-zinc-900">
      <h1 className="text-2xl font-bold mb-6">Star Wars Planets</h1>
      <ul className="grid gap-4 w-full max-w-xl">
        {data.results.map((p: any) => {
          const id = p.url.split("/").filter(Boolean).pop(); // pega o id
          return (
            <li key={p.name} className="border rounded p-4 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition">
              <Link href={`/planets/${id}`}>
                <h2 className="text-lg font-semibold hover:underline">{p.name}</h2>
              </Link>
              <p className="text-sm text-zinc-500">Clima: {p.climate}</p>
              <p className="text-sm text-zinc-500">Terreno: {p.terrain}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
