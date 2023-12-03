const subDomain = '';
const domain = '';
export const FRONTEND_URL = 'https://badges.bio';
export const API_URL = process.env.API_URL;
export const GOOGLE_ANALYTICS_ID = 'G-XGTDNKK4DT';
export const API_TOKEN_PRIVATE = process.env.API_TOKEN_PRIVATE;

const baseConfig = {
  subDomain,
  domain,
  baseUrl: `https://${domain}`,
  fetchUrl: `https://${subDomain}.${domain}`,
  publicApiUrl: `https://${subDomain}.${domain}`,
  graphqlUrl: `https://${subDomain}.${domain}`,
  apiTokenPrivate: process.env.API_TOKEN_PRIVATE,
};

const devConfig = {
  apiRoutesUrl: '',
};
const prodConfig = {
  graphqlUrl: `https://192.168.208.1:8056`,
  apiRoutesUrl: FRONTEND_URL,
};

export const config = {
  ...baseConfig,
  ...(process.env.NODE_ENV === 'development'
    ? devConfig
    : prodConfig),
};

export const myConfig = config;
