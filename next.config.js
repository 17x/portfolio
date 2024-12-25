const path = require("node:path");
const Stringifier = require("postcss/lib/stringifier");

/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';
const ip = require('ip')
const currentIp = ip.address()

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  env: {
    DOC_URL: isProd ? '' : `http://${currentIp}:8080/docs`
  },
  // basePath: path.resolve(__dirname,'../lucasischow.github.io/docs/'),
  // distDir: path.resolve(__dirname,'../lucasischow.github.io/docs'),
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  }
}

module.exports = nextConfig