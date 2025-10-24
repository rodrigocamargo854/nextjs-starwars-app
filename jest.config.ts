import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  clearMocks: true,
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.next/",
    "/dist/",
    "/coverage/"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",

    "!src/**/*.d.ts",
    "!src/**/types.{ts,tsx}",           
    "!src/**/(style|styles).{ts,tsx}",  
    "!src/**/index.ts",                 

    "!src/app/**/layout.tsx",
    "!src/app/globals.css",


    "!src/**/__tests__/**"
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["text", "text-summary", "lcov"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
transform: { "^.+\\.(t|j)sx?$": ["@swc/jest",{}] },

};

export default config;
