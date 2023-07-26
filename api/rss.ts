import { NuxtContentInstance } from '@nuxt/content/types/content'

export default async function (req, res) {
  const { $content } = require('@nuxt/content')
  const articles = await $content('articles').fetch()

  const feed = {
    title: 'Website RSS Feed',
    link: 'https://example.com/rss.xml',
    description: 'Latest articles from the website',
    language: 'en',
    items: articles.map((article: NuxtContentInstance) => ({
      title: article.title,
      link: `https://example.com/articles/${article.slug}`,
      description: article.description,
      pubDate: new Date(article.date).toUTCString(),
    })),
  }

  res.setHeader('Content-Type', 'application/xml')
  res.end(generateRssXml(feed))
}

function generateRssXml(feed) {
  // Generate RSS XML here
}