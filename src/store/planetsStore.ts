"use client";
import { atom } from "jotai";
import { ApiResponse } from "@/app/lib/api/types";

export const planetsAtom = atom<ApiResponse>({ count: 0, results: [] });
export const pageAtom = atom(1);
export const searchAtom = atom("");
export const loadingAtom = atom(false);

export const UI_LABELS = {
  title: "Star Wars Planets",
  searchPlaceholder: "Search by name...",
  loading: "Loading...",
  none: "None",
  unknown: "Unknown",
  terrain: "Terrain",
  diameter: "Diameter",
  climate: "Climate",
  films: "Films",
  prev: "Prev",
  next: "Next",
  page: "Page",
};

export const FILM_TITLES: Record<string, string> = {
  "1": "A New Hope",
  "2": "The Empire Strikes Back",
  "3": "Return of the Jedi",
  "4": "The Phantom Menace",
  "5": "Attack of the Clones",
  "6": "Revenge of the Sith",
  "7": "The Force Awakens",
};

export function getFilmId(url: string): string {
  const match = url.match(/\/films\/(\d+)\/?$/);
  return match ? match[1] : "";
}
