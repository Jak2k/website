import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const blog = await getCollection('posts');
  return rss({
    title: `Jak2k' Blog`,
    description: 'A blog about web development, linux and other stuff',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.lastUpdated,
      description: post.body.split('\n')[0],
      link: `/post/${post.slug}/`,
    })),
  });
}