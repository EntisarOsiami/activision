import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    bg: "/support/BO6_S3R_hero.jpg",
    logo: "/support/BO6-S3R-logo-lockup.png",
    actions: [
      {
        href: "/uk/en/black-ops-6/articles/black-ops-6-warzone-seasons",
        icon: "/support/icon_game.png",
        label: "CHECK OUT WHAT'S NEW IN SEASON 03 RELOADED",
      },
      {
        href: "/uk/en/black-ops-6",
        icon: "/support/icon_support.png",
        label: "Browse the support page",
      },
    ],
  },
  {
    bg: "/support/WZV-home-banner-v3.jpg",
    logo: "/support/WZ-logo-wh.png",
    actions: [
      {
        href: "/uk/en/warzone-2/articles/warzone-2-installation-and-setup",
        icon: "/support/icon_game.png",
        label: "WARZONE INSTALLATION AND SETUP",
      },
      {
        href: "/uk/en/warzone-2",
        icon: "/support/icon_support.png",
        label: "Browse the support page",
      },
    ],
  },
  {
    bg: "/support/THPS34_home_01.jpg",
    logo: "/support/THPS34_LOGO_NEG.png",
    actions: [
      {
        href: "/uk/en/tony-hawks-pro-skater-3-4/articles/tony-hawks-pro-skater-3-4-faq",
        icon: "/support/icon_game.png",
        label: "Tony Hawk’s Pro Skater 3 + 4 FAQ",
      },
      {
        href: "/uk/en/tony-hawks-pro-skater-3-4/articles/tony-hawks-pro-skater-3-4-code-support",
        icon: "/support/icon_support.png",
        label: "Tony Hawk’s Pro Skater 3 + 4 Code Support",
      },
    ],
  },
  {
    bg: "/support/MWIII-Hero-ban-beta.png",
    logo: "/support/MWIII-logo-1a.png",
    actions: [
      {
        href: "/uk/en/modern-warfare-iii/articles/modern-warfare-iii-installation-and-setup",
        icon: "/support/icon_game.png",
        label: "MODERN WARFARE III INSTALLATION AND SETUP",
      },
      {
        href: "/uk/en/modern-warfare-iii",
        icon: "/support/icon_support.png",
        label: "Browse the support page",
      },
    ],
  },
  {
    bg: "/support/MWII-PS-HERO.jpg",
    logo: "/support/MWII-logo-2023.png",
    actions: [
      {
        href: "/uk/en/modern-warfare-ii/articles/modern-warfare-ii-installation-and-setup",
        icon: "/support/icon_game.png",
        label: "MODERN WARFARE II INSTALLATION AND SETUP",
      },
      {
        href: "/uk/en/modern-warfare-ii",
        icon: "/support/icon_support.png",
        label: "Browse the support page",
      },
    ],
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  pauseOnHover: false,
};

export default function SupportCarousel() {
  return (
    <section className="relative w-full min-h-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="relative h-[70vh] w-full">
            <div className="absolute inset-0">
              <img
                src={slide.bg}
                alt="Game banner"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="relative h-full w-full max-w-screen-xl mx-auto px-4 flex items-center justify-start"
            >
              <div className="w-full max-w-md py-12 text-white flex flex-col items-start gap-8">
                <div>
                  <img src={slide.logo} alt="Slide logo" className="h-50" />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  {slide.actions.map((action, j) => (
                    <a
                      key={j}
                      href={action.href}
                      className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 px-4 py-3 rounded transition"
                    >
                      <img src={action.icon} alt="" className="w-6 h-6" />
                      <p className="text-sm font-medium">{action.label}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
