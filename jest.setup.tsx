import React from "react";
import "@testing-library/jest-dom";

jest.mock("next/link", () => {
  return function Link({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    return <a href={href}>{children}</a>;
  };
});
