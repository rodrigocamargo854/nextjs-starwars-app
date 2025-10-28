import { render } from "@testing-library/react";
import HomePage from "../page";

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      count: 1,
      results: [
        {
          name: "Tatooine",
          url: "https://swapi.dev/api/planets/1/",
          terrain: "desert",
          diameter: "10465",
          climate: "arid",
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
          ],
        },
      ],
    }),
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("HomePage", () => {
  it("should render HomePage", () => {
    const ui = <HomePage />;
    const { container } = render(ui as any);
    expect(container).toBeInTheDocument();
  });
});
