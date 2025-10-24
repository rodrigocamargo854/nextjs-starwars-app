import { render } from "@testing-library/react";
import PlanetsPage from "../planets/page";

jest.mock("@/app/lib/api/starwars/api", () => ({
  __esModule: true,
  getPlanets: jest.fn().mockResolvedValue({ results: [] }),
  getPlanetById: jest.fn().mockResolvedValue({ name: "Tatooine" }), 
}));

jest.mock("@/app/lib/api/starwars/https", () => ({
  __esModule: true,
  http: {
    get: jest.fn().mockResolvedValue({ data: { results: [] } }),
  },
}));

describe("PlanetsPage", () => {
  it("renderiza sem quebrar", async () => {
const ui = await PlanetsPage({ params: {} } as any);
    const { container } = render(ui as any);
    expect(container).toBeInTheDocument();
  });
});
