import { describe, it, expect, beforeEach, afterEach, jest } from "@jest/globals";
import type { AxiosResponse } from "axios";
import { getPlanets, getPlanetById } from "../api";
import { http } from "../https";

function res<T>(data: T): AxiosResponse<T> {
  return { data, status: 200, statusText: "OK", headers: {}, config: { headers: {} as any } as any };
}

let getSpy: jest.SpiedFunction<typeof http.get>;
let errSpy: ReturnType<typeof jest.spyOn>;

beforeEach(() => {
  getSpy = jest.spyOn(http, "get");
  errSpy = jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  getSpy.mockRestore();
  errSpy.mockRestore();
});

describe("starwars api", () => {
  it("getPlanets ok (defaults)", async () => {
    getSpy.mockResolvedValueOnce(res({ count: 1, next: null, previous: null, results: [{ name: "Tatooine" }] }));
    const data = await getPlanets();
    expect(getSpy).toHaveBeenCalledWith("/planets/?page=1&search=");
    expect(data.results[0].name).toBe("Tatooine");
    expect(errSpy).not.toHaveBeenCalled();
  });

  it("getPlanets ok (query)", async () => {
    getSpy.mockResolvedValueOnce(res({ count: 0, next: null, previous: null, results: [] }));
    const data = await getPlanets(3, "tat");
    expect(getSpy).toHaveBeenCalledWith("/planets/?page=3&search=tat");
    expect(data.results).toEqual([]);
    expect(errSpy).not.toHaveBeenCalled();
  });

  it("getPlanets error", async () => {
    getSpy.mockRejectedValueOnce(new Error("boom"));
    const data = await getPlanets(2, "x");
    expect(data).toEqual({ error: true, message: "error go catch planet" });
    expect(errSpy).toHaveBeenCalledWith("Error to get Pla:", "boom");
  });

  it("getPlanetById ok", async () => {
    getSpy.mockResolvedValueOnce(res({ name: "Alderaan" }));
    const data = await getPlanetById("2");
    expect(getSpy).toHaveBeenCalledWith("/planets/2/");
    expect(data.name).toBe("Alderaan");
    expect(errSpy).not.toHaveBeenCalled();
  });

  it("getPlanetById error", async () => {
    getSpy.mockRejectedValueOnce(new Error("nope"));
    const data = await getPlanetById("99");
    expect(data).toEqual({ error: true, message: "Falha ao buscar planeta." });
    expect(errSpy).toHaveBeenCalledWith("Eroor to get planet by id:", "nope");
  });
});
