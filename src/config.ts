const subDomain = '';
const domain = '';

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
  apiRoutesUrl: 'https://badges.bio',
};

export const config = {
  ...baseConfig,
  ...(process.env.NODE_ENV === 'development'
    ? devConfig
    : prodConfig),
};

export const myConfig = config;
