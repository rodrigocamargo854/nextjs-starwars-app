import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DetailsCard from "./Index";

describe("<DetailsCard />", () => {
  const planet = {
    name: "Tatooine",
    rotation_period: "23",
    orbital_period: "304",
    diameter: "10465",
    climate: "arid",
    gravity: "1 standard",
    terrain: "desert",
    population: "200000",
  };

  it("renderiza os campos do planeta e o link de back", () => {
    render(<DetailsCard planet={planet} />);

    expect(screen.getByRole("heading", { name: "Tatooine" })).toBeInTheDocument();

    expect(screen.getByText("Rotation period:")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("Orbital period:")).toBeInTheDocument();
    expect(screen.getByText("304")).toBeInTheDocument();
    expect(screen.getByText("Diameter:")).toBeInTheDocument();
    expect(screen.getByText("10465")).toBeInTheDocument();
    expect(screen.getByText("Climate:")).toBeInTheDocument();
    expect(screen.getByText("arid")).toBeInTheDocument();
    expect(screen.getByText("Gravity:")).toBeInTheDocument();
    expect(screen.getByText("1 standard")).toBeInTheDocument();
    expect(screen.getByText("Terrain:")).toBeInTheDocument();
    expect(screen.getByText("desert")).toBeInTheDocument();
    expect(screen.getByText("Population:")).toBeInTheDocument();
    expect(screen.getByText("200000")).toBeInTheDocument();

    const backText = screen.getByText(/back to planets/i);
    const container = backText.closest("[data-href]");
    expect(container).toHaveAttribute("data-href", "/");
  });
});
