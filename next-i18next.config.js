const path = require('path');

module.exports = {
    i18n: {
      locales: ['ge', 'en' ],
      defaultLocale: 'ge',
      localeDetection: false,
    },
    fallbackLng: { default: ['ge', 'en' ]},
    defaultNs: 'shared',
    localePath: path.resolve('./public/locales'),
  };