import { useTranslation } from "react-i18next";
import { LANGS } from "./translations";

export function Languages() {
  const { i18n } = useTranslation();
  const { t: EN} = useTranslation(undefined, {lng: 'en'});
  const { t: JP} = useTranslation(undefined, {lng: 'ja'});

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-start">
        {LANGS.map((lang, i) => (
          <>
            {i > 0 && (
              <span key={lang} className="opacity-50">
                |
              </span>
            )}
            <button
              key={lang}
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

      {i18n.language == "zh" && (
        <>
          <div className="text-sm text-gray-500">
            {EN("funFact")}: {EN("funFactText")}
          </div>
          <div className="text-sm text-gray-500">
            {JP("funFact")}: {JP("funFactText")}
          </div>
        </>
      )}
    </div>
  );
}
