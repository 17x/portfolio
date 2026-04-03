const SITE_BASE_PATH = process.env.NEXT_PUBLIC_SITE_BASE_PATH || '';
const DEMO_BASE_URL = process.env.NEXT_PUBLIC_DEMO_BASE_URL || '';

const ABSOLUTE_URL_RE = /^(?:[a-z]+:)?\/\//i;

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');
const trimLeadingSlash = (value: string) => value.replace(/^\/+/, '');

export const isAbsoluteUrl = (value: string) =>
  ABSOLUTE_URL_RE.test(value) || value.startsWith('data:') || value.startsWith('mailto:');

export const withSiteBasePath = (value: string) => {
  if (!value || isAbsoluteUrl(value)) {
    return value;
  }

  const normalizedPath = `/${trimLeadingSlash(value)}`;

  if (!SITE_BASE_PATH) {
    return normalizedPath;
  }

  return `${trimTrailingSlash(SITE_BASE_PATH)}${normalizedPath}`;
};

export const resolveDemoUrl = (value: string) => {
  if (!value || isAbsoluteUrl(value)) {
    return value;
  }

  if (value.startsWith('/demos') && DEMO_BASE_URL) {
    return `${trimTrailingSlash(DEMO_BASE_URL)}${value}`;
  }

  return withSiteBasePath(value);
};

export const resolvePublicAssetUrl = (value: string) => {
  if (!value || isAbsoluteUrl(value)) {
    return value;
  }

  return withSiteBasePath(value);
};
