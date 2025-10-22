import { http } from "./https";

export async function getPlanets(page = 1, search = "") {
  const params = new URLSearchParams({ page: String(page), search });
  const { data } = await http.get(`/planets/?${params}`);
  return data;
}

export async function getPlanetById(id: string) {
  const { data } = await http.get(`/planets/${id}/`);
  return data;
}
