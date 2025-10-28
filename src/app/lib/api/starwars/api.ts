import { FILM_TITLES, getFilmId } from "@/constants/films";

export async function getPlanets(page: number, search: string) {
  const res = await fetch(`/api/planets?page=${page}&search=${encodeURIComponent(search)}`);
  const data = await res.json();

  const results = (data.results ?? []).map((planet: any) => ({
    ...planet,
    filmNames: Array.isArray(planet.films)
      ? planet.films
          .map((url: string) => {
            const id = getFilmId(url);
            return FILM_TITLES[id] ?? `Unknown (${id})`;
          })
          .join(", ")
      : "None",
  }));

  return { count: data.count ?? 0, results };
}
