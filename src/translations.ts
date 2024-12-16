import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// translation catalog
const resources = {
  en: {
    translation: {
      hello: "Hey there!",
      name: "I'm Min Yin",
      scroll: "Scroll down to learn more about me!",
      jump: "Jump to a section",
    },
  },
  de: {
    translation: {
      hello: "Servus!",
    },
  },
  ja: {
    translation: {
      hello: "やあ！",
    },
  },
  zh: {
    translation: {
      hello: "你好！",
    },
  },
};

// initialize i18next with catalog and language to use
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",
});
