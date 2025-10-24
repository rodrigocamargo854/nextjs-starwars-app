import { GET } from "./route";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: async () => ({ results: [{ name: "Tatooine" }, { name: "Alderaan" }] }),
  })
) as jest.Mock;

jest.mock("next/server", () => ({
  NextResponse: {
    json: (body: any, init?: any) => ({
      json: async () => body,
      status: init?.status ?? 200,
    }),
  },
}));

describe("GET /api/planets", () => {
  it("should return sorted planets when fetch is ok", async () => {
    const req = { url: "https://fake.com/api/planets?page=1&search=" } as any;
    const res = await GET(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.results.map((r: any) => r.name)).toEqual(["Alderaan", "Tatooine"]);
  });

  it("should return an error if fetch fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({}),
    });

    const req = { url: "https://fake.com/api/planets?page=1&search=" } as any;
    const res = await GET(req);
    const data = await res.json();

    expect(res.status).toBe(404);
    expect(data.error).toBe(true);
  });
});
