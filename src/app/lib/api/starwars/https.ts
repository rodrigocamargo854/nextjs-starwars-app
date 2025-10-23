import axios from "axios";

function getBaseUrl() {
  if (typeof window !== "undefined") return "";

  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  const port = process.env.PORT ?? 3000;
  return `http://127.0.0.1:${port}`;
}

export const http = axios.create({
  baseURL: `${getBaseUrl()}/api`,
  timeout: 10000,
});
