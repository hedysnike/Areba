const path = require('path');

module.exports = {
    i18n: {
      locales: ['lang0', 'lang1' ],
      defaultLocale: 'lang0',
      localeDetection: false,
    },
    fallbackLng: { default: ['lang0', 'lang1' ]},
    defaultNs: 'shared',
    localePath: path.resolve('./public/locales'),
  };