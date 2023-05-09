import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import heroTranslations from "./translations/heroTranslations.json";
import factsTranslations from "./translations/factsTranslations.json";
import missionTranslations from "./translations/missionTranslations.json";
import methodsProcessTranslations from "./translations/methodsProcessTranslations.json";
import consulatitionTranslations from "./translations/consultationTranslations.json";
import footerTranslations from "./translations/footerTranslations.json";
import navbarTranslations from "./translations/navbarTranslations.json";
import aboutTranslations from "./translations/aboutTranslations.json";
import faqTranslations from "./translations/faqTranslations.json";
import priceTranslations from "./translations/priceTranslations.json";
import workTranslations from "./translations/workTranslations.json";
import clientsTranslations from "./translations/clientsTranslations.json";
import teamTranslations from "./translations/teamTranslations.json";
import testimonialTranslations from "./translations/testimonialsTranslations.json";
import methodsTranslations from "./translations/methodsTranslations.json";

const translations = {
  ru: {
    translation: {
      ...heroTranslations.ru.translation,
      ...factsTranslations.ru.translation,
      ...missionTranslations.ru.translation,
      ...methodsProcessTranslations.ru.translation,
      ...consulatitionTranslations.ru.translation,
      ...footerTranslations.ru.translation,
      ...navbarTranslations.ru.translation,
      ...aboutTranslations.ru.translation,
      ...faqTranslations.ru.translation,
      ...priceTranslations.ru.translation,
      ...workTranslations.ru.translation,
      ...clientsTranslations.ru.translation,
      ...teamTranslations.ru.translation,
      ...testimonialTranslations.ru.translation,
      ...methodsTranslations.ru.translation,
    },
  },
  uz: {
    translation: {
      ...heroTranslations.uz.translation,
      ...factsTranslations.uz.translation,
      ...missionTranslations.uz.translation,
      ...methodsProcessTranslations.uz.translation,
      ...consulatitionTranslations.uz.translation,
      ...footerTranslations.uz.translation,
      ...navbarTranslations.uz.translation,
      ...aboutTranslations.uz.translation,
      ...faqTranslations.uz.translation,
      ...priceTranslations.uz.translation,
      ...workTranslations.uz.translation,
      ...clientsTranslations.uz.translation,
      ...teamTranslations.uz.translation,
      ...testimonialTranslations.uz.translation,
      ...methodsTranslations.uz.translation,
    },
  },
  // add more languages as needed
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: translations,
  fallbackLng: "ru",
  debug: true,
});

export default i18n;
