const path = require("node:path");
const Stringifier = require("postcss/lib/stringifier");

/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';
// console.log(process.env.NODE_ENV)
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  env: {
    DOC_URL: isProd ? '' : 'http://192.168.1.136:8080/docs'
  },
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