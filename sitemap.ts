import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jsontotoon.site";

const routes: Array<{ path: string; priority?: number }> = [
  { path: "/", priority: 1 },
  { path: "/about" },
  { path: "/contact" },
  { path: "/faq" },
  { path: "/privacy" },
  { path: "/terms" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: priority ?? 0.7,
  }));
}

