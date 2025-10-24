import { GET } from "./route";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ name: "Tatooine" }),
  })
) as jest.Mock;

jest.mock("next/server", () => ({
  NextResponse: {
    json: (body: any) => ({
      json: async () => body,
      status: 200,
    }),
  },
}));

describe("GET /api/planets/[id]", () => {
  it("get sucess to return planet", async () => {
    const res = await GET({} as any, { params: { id: "1" } });
    const data = await res.json();
    expect(data).toEqual({ name: "Tatooine" });
  });
});
