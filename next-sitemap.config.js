/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://www.sembresjero.me',
    changefreq: 'monthly',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    alternateRefs: [
      {
        href: 'https://www.sembresjero.me/en',
        hreflang: 'es',
      },
      {
        href: 'https://www.sembresjero.me/fr',
        hreflang: 'fr',
      },
    ],
    // Default transformation function
    transform: async (config, path) => {
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    },
    additionalPaths: async (config) => [
      await config.transform(config, '/additional-page'),
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: 'test-bot',
          allow: ['/path', '/path-2'],
        },
        {
          userAgent: 'black-listed-bot',
          disallow: ['/sub-path-1', '/path-2'],
        },
      ],
      additionalSitemaps: [
        'https://example.com/my-custom-sitemap-1.xml',
        'https://example.com/my-custom-sitemap-2.xml',
        'https://example.com/my-custom-sitemap-3.xml',
      ],
    },
  }