import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Index";

describe("<Card />", () => {
  it("renderiza título, infos e link", () => {
    render(
      <Card
        href="/planets/1"
        title="Tatooine"
        info={["Terrain: desert", "Diameter: 10465", "Climate: arid", "Films: 5"]}
      />
    );

    // título
    expect(screen.getByText("Tatooine")).toBeInTheDocument();

    // lista de infos
    const list = screen.getByRole("list");
    const items = within(list).getAllByRole("listitem");
    expect(items).toHaveLength(4);
    expect(items[0]).toHaveTextContent("Terrain: desert");

    // link
    const link = screen.getByRole("link", { name: /tatooine/i });
    expect(link).toHaveAttribute("href", "/planets/1");
  });
});
