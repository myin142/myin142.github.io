import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const LANGS = ["en", "de", "ja", "zh"];

// translation catalog
const resources = {
  en: {
    translation: {
      hello: "Hey there!",
      name: "I'm Min Yin",
      scroll: "Scroll to learn more!",
      jump: "Jump to a section",

      funFact: "Fun fact",
      funFactText: "I'm Chinese, but it's my worst language out of these.",

      programming: "Programming",
      art: "Art",
      games: "Games",
    },
  },
  de: {
    translation: {
      hello: "Servus!",
      name: "Ich bin Min Yin",
      scroll: "Scrolle, um mehr zu erfahren!",
      jump: "Springe zu einem Abschnitt",

      programming: "Programmierung",
      art: "Kunst",
      games: "Spiele",
    },
  },
  ja: {
    translation: {
      hello: "やあ！",
      name: "私はインミン",
      scroll: "もっと知るためにスクロール！",
      jump: "セクションにジャンプする",

      funFact: "豆知識",
      funFactText: "中国人なのに、私の最悪の言語だ。",

      programming: "プログラミング",
      art: "アート",
      games: "ゲーム",
    },
  },
  zh: {
    translation: {
      hello: "你好！",
      name: "我是尹民",
      scroll: "滚动以了解更多！",
      jump: "跳到一个部分",

      programming: "编程",
      art: "艺术",
      games: "游戏",
    },
  },
};

// initialize i18next with catalog and language to use
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",
});
