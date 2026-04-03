/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';
const isGithubPages = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true';
const ip = require('ip');
const currentIp = ip.address();
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'portfolio';
const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? (isGithubPages ? `/${repoName}` : '');
const defaultDemoBaseUrl = isProd ? 'https://lucasischow.github.io' : `http://${currentIp}:8080`;
const demoBaseUrl = process.env.NEXT_PUBLIC_DEMO_BASE_URL || defaultDemoBaseUrl;

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: siteBasePath || undefined,
  assetPrefix: siteBasePath || undefined,
  env: {
    NEXT_PUBLIC_SITE_BASE_PATH: siteBasePath,
    NEXT_PUBLIC_DEMO_BASE_URL: demoBaseUrl,
  },
  experimental: {
    // serverComponents: false
  },
  compiler: {
    removeConsole: isProd,
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
