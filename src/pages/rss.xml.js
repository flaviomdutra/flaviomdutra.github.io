import rss from "@astrojs/rss";
import { getBlogPosts } from "../data/blog";

export async function GET(context) {
  return rss({
    title: "Flávio Dutra — Blog",
    description: "Notes on software architecture and engineering.",
    site: context.site,
    items: getBlogPosts("pt").map((post) => ({
      title: post.title,
      description: post.summary,
      link: `/blog/${post.slug}/`,
      pubDate: new Date(post.pubDate),
    })),
  });
}
