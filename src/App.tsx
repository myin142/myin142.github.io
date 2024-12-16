import React from "react";
import "./translations";
import { FaGithub, FaPixiv, FaItchIo, FaArrowDown } from "react-icons/fa6";

import { useTranslation } from "react-i18next";

const LANGS = ["en", "de", "ja", "zh"];

function App() {
  const { t, i18n } = useTranslation();

  return (
    <main className="h-full bg-slate-200 font-mono p-12 flex flex-col justify-between text-xl">
      <div className="flex justify-between">
        <div className="flex gap-2 items-start text-base">
          {LANGS.map((lang, i) => (
            <>
              {i > 0 && <span className="opacity-50">|</span>}
              <button
                onClick={() => i18n.changeLanguage(lang)}
                className={
                  i18n.language?.toLowerCase().startsWith(lang.toLowerCase())
                    ? "font-bold"
                    : "opacity-50 hover:opacity-100"
                }
              >
                {lang.toUpperCase()}
              </button>
            </>
          ))}
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex flex-col gap-4 text-right">
            <h1 className="text-5xl font-bold">{t("hello")}</h1>
            <h2 className="text-3xl">{t("name")}</h2>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/16972565?s=96&v=4"
            alt="Min Yin"
            className="rounded-full w-40 h-40 border border-slate-400"
          />
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex gap-4">
          <a
            href="https://github.com/myin142"
            target="_blank"
            className="flex flex-col gap-2 items-center rounded px-8 py-4 hover:bg-slate-100"
          >
            <FaGithub className="w-16 h-16" />
            <span>Github</span>
          </a>
          <a
            href="https://www.pixiv.net/users/58480310"
            target="_blank"
            className="flex flex-col gap-2 items-center rounded px-8 py-4 hover:bg-slate-100"
          >
            <FaPixiv className="w-16 h-16" />
            <span className="text-center">Pixiv</span>
          </a>
          <a
            href="https://kuma-gee.itch.io/"
            target="_blank"
            className="flex flex-col gap-2 items-center rounded px-8 py-4 hover:bg-slate-100"
          >
            <FaItchIo className="w-16 h-16" />
            <span className="text-center">Itchio</span>
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-4 items-end">
            <span>{t("scroll")}</span>
            <div className="flex gap-8">
              <button className="bg-slate-100 px-4 py-2 rounded font-bold hover:bg-white">
                Programming
              </button>
              <button className="bg-slate-100 px-4 py-2 rounded font-bold hover:bg-white">
                Artist
              </button>
              <button className="bg-slate-100 px-4 py-2 rounded font-bold hover:bg-white">
                Games
              </button>
              <FaArrowDown className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
