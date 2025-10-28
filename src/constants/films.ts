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
