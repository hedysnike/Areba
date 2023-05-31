/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ge', 'en' ],
    defaultLocale: 'ge',
    localeDetection: false,
  },

};

module.exports = nextConfig;
