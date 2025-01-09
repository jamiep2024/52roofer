/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://52roofer.com',
  generateRobotsTxt: true,
  exclude: [
    '/404',
    '/500',
    '/api/*',
    '/admin/*',
    '/dashboard/*',
    '/_error',
    '/_next/*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/404',
          '/500',
          '/api/*',
          '/admin/*',
          '/dashboard/*',
          '/_error',
          '/_next/*'
        ]
      }
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://52roofer.com'}/sitemap.xml`
    ]
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString()
    }
  }
}
