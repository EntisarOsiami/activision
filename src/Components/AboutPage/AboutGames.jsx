
const games = [
  {
    title: "Call of Duty Black Ops 6",
    rating: "Mature 17+",
    href: "/games/call-of-duty/call-of-duty-black-ops-6",
    image: "/games/BO6-FOB.jpg",
  },
  {
    title: "Call of Duty®: Warzone",
    rating: "Mature 17+",
    href: "/games/call-of-duty/call-of-duty-warzone",
    image: "/games/wz-boxart.jpg",
  },
  {
    title: "Call of Duty Modern Warfare III",
    rating: "Mature 17+",
    href: "/games/call-of-duty/call-of-duty-modern-warfare-3",
    image: "/games/mwiii-boxart.jpg",
  },
  {
    title: "Crash Team Rumble",
    rating: "Everyone 10+",
    href: "/games/crash/crash-team-rumble",
    image: "/games/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg",
  },
  {
    title: "Tony Hawk's™ Pro Skater™ 1 + 2",
    rating: "Teen",
    href: "/games/tony-hawk/tony-hawks-pro-skater-1-2",
    image: "/games/thps-1-2-boxart.png",
  },
  {
    title: "Call of Duty®: Mobile",
    rating: "Mature 17+",
    href: "/games/call-of-duty/call-of-duty-mobile",
    image: "/games/codm-boxart.jpg",
  },
  {
    title: "Sekiro®: Shadows Die Twice",
    rating: "Mature 17+",
    href: "/games/sekiro/sekiro-shadows-die-twice",
    image: "/games/sekiro-boxart.jpg",
  },
  {
    title: "SPYRO® Reignited Trilogy",
    rating: "Everyone 10+",
    href: "/games/spyro/spyro-reignited-trilogy",
    image: "/games/spyro-boxart.png",
  },
];

function AboutGames  () {
  return (
<section
  id="about-our-games"
  className="bg-black text-white py-20 px-4 md:px-8 lg:px-16"
>
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-2xl lg:text-3xl font-extrabold uppercase mb-6 border-b-2 border-gray-500 pb-4">
      Our Games
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {games.map((game) => (
        <a
          key={game.title}
          href={game.href}
          className="group flex flex-col items-start space-y-2"
        >
          <div className="w-full overflow-hidden rounded-md">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-sm font-bold uppercase leading-tight">
            {game.title}
          </h3>
          <p className="text-xs text-gray-400">{game.rating}</p>
        </a>
      ))}
    </div>
  </div>
</section>

  );
};

export default AboutGames;
