import { render } from "@testing-library/react";
import HomePage from "../page";

describe("HomePage", () => {
  it("renderiza sem quebrar", () => {
    const ui = <HomePage />;
    const { container } = render(ui as any);
    expect(container).toBeInTheDocument();
  });
});
