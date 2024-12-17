import { FaArrowDown } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Languages } from "./Languages";
import { Socials } from "./Socials";

function App() {
  const { t } = useTranslation();

  const groups = ["programming", "art", "games"];

  return (
    <main className="h-full bg-white font-mono p-12 flex flex-col justify-between">
      <div className="flex justify-between">
        <Languages />
        <div className="flex gap-8 items-center">
          <div className="flex flex-col gap-4 text-right">
            <h1 className="text-5xl font-bold">{t("hello")}</h1>
            <h2 className="text-3xl">{t("name")}</h2>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/16972565?s=96&v=4"
            alt="myin142"
            className="rounded-full w-40 h-40 border border-slate-300"
          />
        </div>
      </div>

      <div className="flex justify-between items-end">
        <Socials />
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-4 items-end">
            <span>{t("scroll")}</span>
            <div className="flex gap-8">
              {groups.map((g) => (
                <button
                  key={g}
                  className="bg-slate-100 px-4 py-2 rounded font-bold hover:bg-white border"
                >
                  {t(g)}
                </button>
              ))}
              <FaArrowDown className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
