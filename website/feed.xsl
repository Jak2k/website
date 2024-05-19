<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
  <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
    <head>
      <title>
        <xsl:value-of select="/atom:feed/atom:title"/>
      </title>
      <link rel="stylesheet" href="/styles.css"/>
    </head>
    <body data-rss="">
      <p>
        This is an RSS feed. Visit
        <a href="https://aboutfeeds.com">About Feeds</a>
        to learn more and get started. It’s free.
      </p>
      <h1>Recent blog posts by  <xsl:value-of select="/atom:feed/atom:title"/></h1>
      <ul>
      <xsl:for-each select="/atom:feed/atom:entry">
        <li>
        <a>
          <xsl:attribute name="href">
            <xsl:value-of select="atom:link/@href"/>
          </xsl:attribute>
          <xsl:value-of select="atom:title"/>
        </a>
        </li>
      </xsl:for-each>
      </ul>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>