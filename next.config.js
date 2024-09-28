/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  // basePath: isProd ? '/portfolio' : '',
  // assetPrefix: isProd ? '/docs/' : '',
  // assetPrefix: '.',
  // assetPrefix: '/',
  // basePath: '/username.github.io',
  // output: 'standalone',

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  distDir: '/Users/yahone/projects/17x.github.io/docs',
  // contentBase
}

module.exports = nextConfig