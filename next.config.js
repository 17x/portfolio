/**
 * @type {import('next').NextConfig}
 */
// const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  // basePath: path.resolve(__dirname,'../17x.github.io/docs/'),
  // distDir: path.resolve(__dirname,'../17x.github.io/docs'),
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  }
}

module.exports = nextConfig