import { FaGithub, FaPixiv, FaItchIo } from "react-icons/fa6";

export function Socials() {
  const LINKS = [
    { name: "Github", url: "https://github.com/myin142", icon: FaGithub },
    {
      name: "Pixiv",
      url: "https://www.pixiv.net/users/58480310",
      icon: FaPixiv,
    },
    { name: "Itchio", url: "https://kuma-gee.itch.io/", icon: FaItchIo },
  ];

  return (
    <div className="flex gap-4">
      {LINKS.map((link) => (
        <a
          href={link.url}
          key={link.url}
          target="_blank"
          className="flex flex-col gap-2 items-center rounded px-8 py-4 hover:bg-slate-100"
        >
          <link.icon className="w-16 h-16" />
          {/* <span>{link.name}</span> */}
        </a>
      ))}
    </div>
  );
}
