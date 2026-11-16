export type BlogLocale = "pt" | "en";

type BlogFrontmatter = {
  title?: string;
  listingTitle?: string;
  summary?: string;
  description?: string;
  category?: string;
  tags?: string[];
  pubDate?: string | Date;
};

type BlogModule = { frontmatter: BlogFrontmatter };

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  pubDate: string;
};

const postsByLocale: Record<BlogLocale, Record<string, BlogModule>> = {
  pt: import.meta.glob<BlogModule>("../pages/blog/*.md", { eager: true }),
  en: import.meta.glob<BlogModule>("../pages/en/blog/*.md", { eager: true }),
};

export function getBlogPosts(locale: BlogLocale): BlogPost[] {
  return Object.entries(postsByLocale[locale])
    .map(([path, module]) => {
      const frontmatter = module.frontmatter;
      const slug = path.split("/").at(-1)?.replace(/\.md$/, "") ?? "";
      const pubDate = frontmatter.pubDate ?? "";

      return {
        slug,
        title:
          frontmatter.listingTitle ??
          frontmatter.title?.replace(/\s+[—-]\s+Flávio Dutra$/, "") ??
          slug,
        summary: frontmatter.summary ?? frontmatter.description ?? "",
        category: frontmatter.category ?? "",
        tags: frontmatter.tags ?? [],
        pubDate: pubDate instanceof Date ? pubDate.toISOString() : pubDate,
      };
    })
    .sort((a, b) => b.pubDate.localeCompare(a.pubDate) || a.slug.localeCompare(b.slug));
}

const tagLabels: Record<string, Record<BlogLocale, string>> = {
  microservices: { pt: "Microsserviços", en: "Microservices" },
  "software-architecture": {
    pt: "Arquitetura de software",
    en: "Software architecture",
  },
  "distributed-systems": {
    pt: "Sistemas distribuídos",
    en: "Distributed systems",
  },
};

export function getTagLabel(tag: string, locale: BlogLocale): string {
  return tagLabels[tag]?.[locale] ?? tag.replaceAll("-", " ");
}

export function getCategoryLabel(category: string, locale: BlogLocale): string {
  if (category === "architecture") {
    return locale === "pt" ? "Arquitetura" : "Architecture";
  }
  return category;
}
