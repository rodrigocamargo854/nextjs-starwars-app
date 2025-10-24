import { render, screen } from "@testing-library/react";
import { act } from "react";            
import Loading from "../planets/loading";

jest.useFakeTimers();

describe("Loading component", () => {
  it("renderiza o texto inicial e muda as mensagens com o tempo", () => {
    render(<Loading />);

    expect(screen.getByText(/fetching your data/i)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText(/organizing everything/i)).toBeInTheDocument();
  });
});
