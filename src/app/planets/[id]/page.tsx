
import { getPlanetById } from "@/app/lib/api/starwars/api";
import DetailsCard from "@/components/DetailsCard/Index";
import { ResidentsList } from "@/components/ResidentList";
export const dynamic = "force-dynamic";

type PageProps = { params: { id: string } };

function normalize(v?: string) {
  if (!v) return "Desconhecido";
  const s = v.trim().toLowerCase();
  return s === "unknown" || s === "n/a" || s === "-" ? "Desconhecido" : v;
}

async function getJSON<T = any>(url: string, cache: Map<string, any>) {
  if (cache.has(url)) return cache.get(url) as T;
  const res = await fetch(url, { next: { revalidate: 0 } });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  const json = (await res.json()) as T;
  cache.set(url, json);
  return json;
}

async function enrichResident(url: string, cache: Map<string, any>) {
  const p = await getJSON<any>(url, cache);

  const speciesNames =
    Array.isArray(p.species) && p.species.length
      ? await Promise.all(
          p.species.map(async (sUrl: string) => {
            const s = await getJSON<any>(sUrl, cache);
            return normalize(s?.name);
          })
        )
      : [];

  const vehicles =
    Array.isArray(p.vehicles) && p.vehicles.length
      ? await Promise.all(
          p.vehicles.map(async (vUrl: string) => {
            const v = await getJSON<any>(vUrl, cache);
            return { name: normalize(v?.name), model: normalize(v?.model) };
          })
        )
      : [];

  return {
    name: normalize(p.name),
    hairColor: normalize(p.hair_color),
    eyeColor: normalize(p.eye_color),
    gender: normalize(p.gender),
    species: speciesNames,
    vehicles,
  };
}

export default async function PlanetDetails({ params }: PageProps) {
  const planet = await getPlanetById(params.id); 
  const cache = new Map<string, any>();

  const planetView = {
    name: normalize(planet.name),
    rotation_period: normalize(planet.rotation_period),
    orbital_period: normalize(planet.orbital_period),
    diameter: normalize(planet.diameter),
    climate: normalize(planet.climate),
    gravity: normalize(planet.gravity),
    terrain: normalize(planet.terrain),
    population: normalize(planet.population),
  };

  const residents =
    Array.isArray(planet.residents) && planet.residents.length
      ? await Promise.all(
          planet.residents.map((u: string) => enrichResident(u, cache))
        )
      : [];

  return (
    <main className="flex flex-col min-h-screen items-center justify-start p-8 gap-8 bg-white dark:bg-zinc-950">
      <DetailsCard planet={planetView} />
      <ResidentsList residents={residents} />
    </main>
  );
}
