export function Socials({links}: Readonly<{links: {url: string; icon: any}[]}>) {
  return (
    <div className="flex gap-6">
      {links.map((link) => (
        <a
          href={link.url}
          key={link.url}
          target="_blank"
          className="flex flex-col gap-2 items-center rounded px-4 py-2 hover:text-blue-500"
        >
          <link.icon className="w-12 h-12" />
        </a>
      ))}
    </div>
  );
}
