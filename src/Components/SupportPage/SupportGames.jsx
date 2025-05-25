import React from "react";

const games = [
  {
    title: "CALL OF DUTY: BLACK OPS 6",
    href: "/uk/en/black-ops-6",
    img: "/support/games/BO6-home-tile2.jpg",
  },
  {
    title: "ACCOUNT & SECURITY",
    href: "/uk/en/account-security",
    img: "/support/games/account-security-en-silver-tall-2x.jpg",
  },
  {
    title: "CALL OF DUTY: WARZONE",
    href: "/uk/en/warzone-2",
    img: "/support/games/WZV-home-tile.jpg",
  },
  {
    title: "CALL OF DUTY: MOBILE",
    href: "/uk/en/cod-mobile",
    img: "/support/games/codmobile-module.jpg",
  },
  {
    title: "TONY HAWK'S PRO SKATER 3 + 4",
    href: "/uk/en/tony-hawks-pro-skater-3-4",
    img: "/support/games/THPS34-home-tile.png",
  },
  {
    title: "CALL OF DUTY: MODERN  WARFARE III",
    href: "/uk/en/gameern-warfare-iii",
    img: "/support/games/MWIII-home-tile-1c.png",
  },
  {
    title: "CALL OF DUTY: MODERN  WARFARE II",
    href: "/uk/en/gameern-warfare-ii",
    img: "/support/games/MWII-tall-tile.jpg",
  },
  {
    title: "CALL OF DUTY: MODERN  WARFARE",
    href: "/uk/en/gameern-warfare",
    img: "/support/games/MW_module_001.jpg",
  },
  {
    title: "CALL OF DUTY: BLACK OPS COLD WAR",
    href: "/uk/en/black-ops-cold-war",
    img: "/support/games/cold-war-home-page-tile.jpg",
  },
];

function SupportGames  () {
  return (
    <section className=" text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="grid grid-cols-1  lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <li key={index}>
              <a
                href={game.href}
                className="block group hover:opacity-90 transition"
              >
                <p className="mb-3 text-center text-sm font-semibold group-hover:underline">
                  {game.title}
                </p>
                <div className="w-full overflow-hidden rounded shadow-lg">
                  <img src={game.img} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SupportGames;
