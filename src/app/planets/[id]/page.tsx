import { headers } from "next/headers";
import DetailsCard from "@/components/DetailsCard/Index";
import { ResidentsList } from "@/components/ResidentList";

export const dynamic = "force-dynamic";

type PageProps = { params: { id: string } };

function normalize(v?: string) {
  if (!v) return "Unknown";
  const s = v.trim().toLowerCase();
  return s === "unknown" || s === "n/a" || s === "-" ? "Unknown" : v;
}

async function getJSON<T>(url: string) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return (await res.json()) as T;
}

export default async function PlanetDetails({ params }: PageProps) {
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  const base = `${proto}://${host}`;

  const planet = await getJSON<any>(`${base}/api/planets/${params.id}`);

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

  const cache = new Map<string, any>();
  async function fetchOnce<T>(url: string) {
    if (cache.has(url)) return cache.get(url) as T;
    const data = await getJSON<T>(url);
    cache.set(url, data);
    return data;
  }

  async function enrichResident(url: string) {
    const p = await fetchOnce<any>(url);
    const species: string[] = Array.isArray(p.species) && p.species.length
      ? await Promise.all(p.species.map(async (s: string) => normalize((await fetchOnce<any>(s))?.name)))
      : [];
    const vehicles = Array.isArray(p.vehicles) && p.vehicles.length
      ? await Promise.all(p.vehicles.map(async (v: string) => {
          const vv = await fetchOnce<any>(v);
          return { name: normalize(vv?.name), model: normalize(vv?.model) };
        }))
      : [];
    return {
      name: normalize(p.name),
      hairColor: normalize(p.hair_color),
      eyeColor: normalize(p.eye_color),
      gender: normalize(p.gender),
      species,
      vehicles,
    };
  }

  const residents = Array.isArray(planet.residents) && planet.residents.length
    ? await Promise.all(planet.residents.map((u: string) => enrichResident(u)))
    : [];

  return (
    <main className="flex flex-col min-h-screen items-center justify-start p-8 gap-8 bg-white dark:bg-zinc-950">
      <DetailsCard planet={planetView} />
      <ResidentsList residents={residents} />
    </main>
  );
}
