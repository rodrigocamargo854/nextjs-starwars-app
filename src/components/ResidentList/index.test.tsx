import React from 'react';

import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ResidentsList } from "../ResidentList/index";

describe("<ResidentsList />", () => {
  it("mostra estado vazio", () => {
    render(<ResidentsList residents={[]} />);
    expect(screen.getByText(/no natives found/i)).toBeInTheDocument();
  });

  it("renderiza residentes com species e vehicles", () => {
    render(
      <ResidentsList
        residents={[
          {
            name: "Luke Skywalker",
            hairColor: "blond",
            eyeColor: "blue",
            gender: "male",
            species: ["Human"],
            vehicles: [
              { name: "Snowspeeder", model: "t-47 airspeeder" },
              { name: "Imperial Speeder Bike", model: "74-Z speeder bike" },
            ],
          },
        ]}
      />
    );

    expect(screen.getByRole("heading", { name: /residents/i })).toBeInTheDocument();

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText(/hair color:/i)).toBeInTheDocument();
    expect(screen.getByText(/blond/i)).toBeInTheDocument();
    expect(screen.getByText(/eye color:/i)).toBeInTheDocument();
    expect(screen.getByText(/blue/i)).toBeInTheDocument();
    expect(screen.getByText(/gender:/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();

    const speciesTitle = screen.getByText(/species/i);
    const speciesList = speciesTitle.nextElementSibling as HTMLElement;
    expect(within(speciesList).getByText("Human")).toBeInTheDocument();

    const vehiclesTitle = screen.getByText(/vehicles/i);
    const vehiclesList = vehiclesTitle.nextElementSibling as HTMLElement;
    expect(within(vehiclesList).getByText(/Snowspeeder — t-47 airspeeder/i)).toBeInTheDocument();
    expect(within(vehiclesList).getByText(/Imperial Speeder Bike — 74-Z speeder bike/i)).toBeInTheDocument();
  });
});
