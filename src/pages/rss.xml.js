import rss from "@astrojs/rss";
export async function GET(context) {
  return rss({
    title: "Flávio Dutra — Blog",
    description: "Notes on software architecture and engineering.",
    site: context.site,
    items: [],
  });
}
