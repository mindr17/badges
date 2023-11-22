const subDomain = 'goapi';
const domain = 'batumi.estate';

const baseConfig = {
  subDomain,
  domain,
  baseUrl: `https://${domain}`,
  fetchUrl: `https://${subDomain}.${domain}`,
  apiToken: '',
};

const devConfig = {};
const prodConfig = {};

export const config = {
  ...baseConfig,
  ...(process.env.NODE_ENV === 'development' ? devConfig : prodConfig),
};

export const myConfig = config;
