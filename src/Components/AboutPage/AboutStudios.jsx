import React from "react";

const studios = [
  {
    name: "Treyarch",
    href: "https://www.treyarch.com",
    image: "/Studios/logo_treyarch.png",
  },
  {
    name: "Infinity Ward",
    href: "https://www.infinityward.com",
    image: "/Studios/logo_infinityward.png",
  },
  {
    name: "High Moon Studios",
    href: "https://www.highmoonstudios.com",
    image: "/Studios/logo_highmoon-studios.png",
  },
  {
    name: "Beenox",
    href: "https://beenox.com/en/",
    image: "/Studios/logo_beenox.png",
  },
  {
    name: "Sledgehammer Games",
    href: "https://www.sledgehammergames.com",
    image: "/Studios/logo_sledgehammer.png",
  },
  {
    name: "Raven Software",
    href: "https://www.ravensoftware.com",
    image: "/Studios/logo_raven.png",
  },
  {
    name: "Toys for Bob",
    href: "https://www.toysforbob.com",
    image: "/Studios/logo-toysforbob.png",
  },
  {
    name: "Activision Shanghai Studios",
    href: null,
    image: "/Studios/logo_atvi-shanghai-studio.png",
  },
  {
    name: "Demonware",
    href: "https://www.demonware.net",
    image: "/Studios/logo_demonware.png",
  },
];

function AboutStudios  () {
  return (
    <section
      id="about-our-studios"
      className="text-white py-20 px-4 md:px-8 lg:px-16 text-center"
    >
      <h2 className="text-2xl lg:text-3xl font-extrabold uppercase mb-6 border-b-2 border-gray-500 pb-4">
        Our Studios
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {studios.map((studio) => {
          const logo = (
            <img
              src={studio.image}
              className="max-h-24 object-contain opacity-40 hover:opacity-100 transition duration-300 ease-in-out"
            />
          );
          return studio.href ? (
            <a
              key={studio.name}
              href={studio.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              {logo}
            </a>
          ) : (
            <div key={studio.name} className="flex items-center justify-center">
              {logo}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutStudios;
