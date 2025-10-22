import { http } from "./https";

export async function getPlanets(page = 1, search = "") {
  try {
    const params = new URLSearchParams({ page: String(page), search });
    const { data } = await http.get(`/planets/?${params}`);
    return data;
  } catch (error: any) {
    console.error("Error to get Pla:", error.message || error);
    return { error: true, message: "error go catch planet" };
  }
}

export async function getPlanetById(id: string) {
  try {
    const { data } = await http.get(`/planets/${id}/`);
    return data;
  } catch (error: any) {
    console.error("Eroor to get planet by id:", error.message || error);
    return { error: true, message: "Falha ao buscar planeta." };
  }
}
