import { render, screen } from "@testing-library/react";
import PlanetDetails from "../planets/[id]/page";

jest.mock("next/headers", () => ({
  headers: jest.fn(() => new Map([
    ["x-forwarded-host", "localhost:3000"],
    ["x-forwarded-proto", "http"],
  ])),
}));

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ name: "Tatooine" }),
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("PlanetDetails page", () => {
  it("deve buscar o planeta e renderizar os detalhes", async () => {
    render(await PlanetDetails({ params: { id: "1" } }));
    expect(await screen.findByText(/Tatooine/i)).toBeInTheDocument();
  });
});
