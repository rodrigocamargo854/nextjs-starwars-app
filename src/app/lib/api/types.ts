export type CardProps = {
    href: string;
    title: string;
    info: string[];
};

export type PlanetDetails = {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    population: string;
};

export type Vehicle = { name: string; model: string };
export type Resident = {
    name: string;
    hairColor: string;
    eyeColor: string;
    gender: string;
    species: string[];
    vehicles: Vehicle[];
};

export type Planet = {
    name: string;
    climate: string;
    terrain: string;
    diameter: string;
    films?: string[];
    url: string;
};

export type ApiResponse = {
    count: number;
    results: Planet[];
};