
import '@testing-library/jest-dom';
import * as React from 'react';

global.React = React; 

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

jest.mock("next/font/google", () => ({
  Inter: () => ({ className: "font-inter" }),
}));