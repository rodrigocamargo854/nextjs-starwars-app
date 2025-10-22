"use client";

import { useEffect, useState } from "react";
import { getPlanets } from "../lib/api/starwars/api";

export default function PlanetsPage() {
  const [planets, setPlanets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPlanets = async () => {
    setLoading(true);
    const data = await getPlanets();
    console.log("Planets data:", data); 
    setPlanets(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center p-8">
      <h1 className="text-2xl font-bold mb-6">Star Wars Planets</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul className="grid gap-4 w-full max-w-xl">
          {planets.map((p) => (
            <li key={p.name} className="border rounded p-4">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-sm text-zinc-500">Clima: {p.climate}</p>
              <p className="text-sm text-zinc-500">Terreno: {p.terrain}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
