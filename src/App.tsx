import { FaArrowDown, FaGithub, FaItchIo, FaPixiv } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Languages } from "./Languages";
import { Socials } from "./Socials";

function App() {
  const { t } = useTranslation();
  const LINKS = [
    {
      name: "Github",
      title: "Programming",
      url: "https://github.com/myin142",
      icon: FaGithub,
    },
    {
      name: "Pixiv",
      title: "Art",
      url: "https://www.pixiv.net/users/58480310",
      icon: FaPixiv,
    },
    {
      name: "Itchio",
      title: "Games",
      url: "https://kuma-gee.itch.io/",
      icon: FaItchIo,
    },
  ];

  return (
    <main className="h-full bg-white font-mono p-6 lg:p-12 flex flex-col justify-between">
      <div className="flex flex-col gap-8 lg:justify-between lg:flex-row">
        <Languages />
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center justify-center lg:self-end">
          <div className="flex flex-col gap-4 text-center lg:text-right">
            <h1 className="text-4xl font-bold">{t("hello")}</h1>
            <h2 className="text-2xl">{t("name")}</h2>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/16972565?s=96&v=4"
            alt="myin142"
            className="rounded-full w-40 h-40 border border-slate-300"
          />
        </div>
      </div>

      <div className="flex items-end justify-end lg:justify-between">
        <div className="gap-6 hidden lg:flex">
          <Socials links={LINKS} />
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-4 items-end">
            <span>{t("scroll")}</span>
            <div className="flex items-end gap-8">
              <div className="flex flex-wrap justify-end gap-4">
                {LINKS.map((g) => (
                  <div key={g.title} className="flex items-center gap-2">
                    <button className="bg-slate-100 px-4 py-2 rounded font-bold hover:bg-white border">
                      {t(g.title)}
                    </button>
                    <a
                      href={g.url}
                      key={g.url}
                      target="_blank"
                      className="lg:hidden flex flex-col gap-2 items-center rounded hover:text-blue-500"
                    >
                      <g.icon className="w-8 h-8" />
                    </a>
                  </div>
                ))}
              </div>
              <FaArrowDown className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
