import { getPlanetById } from "@/app/lib/api/starwars/api";

export const dynamic = "force-dynamic";

type Props = { params: { id: string } };

export default async function PlanetDetails({ params }: Props) {
  const planet = await getPlanetById(params.id);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900">
      <div className="border rounded-xl p-6 w-full max-w-md bg-white dark:bg-zinc-800 shadow-sm">
        <h1 className="text-2xl font-bold mb-4">{planet.name}</h1>
        <p>Clima: {planet.climate}</p>
        <p>Terreno: {planet.terrain}</p>
        <p>População: {planet.population}</p>
      </div>
    </main>
  );
}
