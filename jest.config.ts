import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  clearMocks: true,

  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/app/**/layout.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
    "!src/**/types.{ts,tsx}",
    "!**/*.d.ts"
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["text", "text-summary", "lcov"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },

setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }]
  },

  // (Opcional) exigir mínimos de cobertura
  // coverageThreshold: {
  //   global: { branches: 50, functions: 50, lines: 50, statements: 50 }
  // },
};

export default config;
