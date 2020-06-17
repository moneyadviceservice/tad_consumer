const NextI18Next = require("next-i18next").default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["cy", "en"],
  localeSubpaths: {
    cy: "cy",
    en: "en",
  },
  interpolation: {
    escapeValue: false,
  },
});

module.exports = NextI18NextInstance;
