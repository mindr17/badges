const subDomain = '';
const domain = '';
export const FRONTEND_URL = 'https://badges.bio';

const baseConfig = {
  subDomain,
  domain,
  baseUrl: `https://${domain}`,
  fetchUrl: `https://${subDomain}.${domain}`,
  apiToken: '',
};

const devConfig = {
  apiRoutesUrl: '',
};
const prodConfig = {
  apiRoutesUrl: FRONTEND_URL,
};

export const config = {
  ...baseConfig,
  ...(process.env.NODE_ENV === 'development'
    ? devConfig
    : prodConfig),
};

export const myConfig = config;
