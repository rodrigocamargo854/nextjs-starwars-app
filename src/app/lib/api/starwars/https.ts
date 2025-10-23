import axios from "axios";

const isServer = typeof window === "undefined";

const ORIGIN =
  process.env.NEXT_PUBLIC_BASE_URL 
  || (isServer ? "http://localhost:3000" : "");

export const http = axios.create({
  baseURL: `${ORIGIN}/api`,
  timeout: 10000,
});
