import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const heroSlides = [
  {
    video:
      "https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4",
    logo: "black-ops-6-full-logo.png",
    tagline: `Forced to go rogue. Hunted from Within.\nThis is Black Ops 6.`,
    ctas: [
      { label: "Play with Game Pass", href: "#" },
      { label: "Visit Site", href: "#" },
    ],
    rating: "cod-hub-esrb-en.png",
  },
  {
    video:
      "https://video.activision.com/activision/cdn/videos/tony-hawk-pro-1-2.mp4",
    logo: "Tony_Hawk.png",
    tagline: `Available Now For PS4™, XBOX One® & PC!`,
    ctas: [
      { label: "Get Now", href: "#" },
      { label: "Visit Site", href: "#" },
    ],
    rating: "footer-esrb-thps-en.png",
  },
  {
    video:
      "https://video.activision.com/activision/cdn/videos/THPS3+4_Reveal_15_Channel_ESRB_16x9_ATVI_Header.mp4",
    logo: "PC_LOGO_PRIMARY_NEG_241121.svg",
    tagline: `Available for Xbox Series X|S, Xbox One, PlayStation 4 and 5,\nSteam, Battle.net, Microsoft PC Store, and Nintendo Switch.`,
    ctas: [
      { label: "Pre-Order Now", href: "#" },
      { label: "Visit Site", href: "#" },
    ],
    rating: "esrb-rating-en.svg",
  },
  {
    video: "https://www.activision.com/cdn/crash/crash_team_rumble.mp4",
    logo: "crash-team-rumble-logo.png",
    tagline: `Get ready to dash, jump, slide, and bounce\ninto an all-new way to Crash.`,
    ctas: [
      { label: "Get Now", href: "#" },
      { label: "Visit Site", href: "#" },
    ],
    rating: "esrb-e-m.jpg",
  },
  {
    video:
      "https://video.activision.com/activision/cdn/videos/call-of-duty-mobile.mp4",
    logo: "cod-mobile-logo-v2.png",
    tagline: `Available Now For iOS and Android!`,
    ctas: [
      { label: "Download Now", href: "#" },
      { label: "Visit Site", href: "#" },
    ],
    rating: "cod-hub-esrb-en.png",
  },
];

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <section className="relative w-full overflow-hidden ">
      <Slider {...settings}>
        {heroSlides.map((slide, i) => (
          <div key={i} className="relative h-screen w-full">
            <video
              className="absolute inset-0 w-full h-full object-cover z-0"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={slide.video} type="video/mp4" />
            </video>
            <div className="relative z-20 h-full w-full grid grid-cols-1 md:grid-cols-12 items-center px-4 max-w-screen-xl mx-auto">
              <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left text-white">
                <img
                  src={slide.logo}
                  alt="Game Logo"
                  className="w-[340px] lg:w-[460px] max-w-full mb-8"
                />
                <p className="text-xl lg:text-4xl leading-snug font-semibold lg:font-bold mb-10 max-w-[700px] whitespace-pre-line">
                  {slide.tagline}
                </p>

                <div className="flex flex-col lg:flex-row gap-4 w-full max-w-xs lg:max-w-none lg:justify-start items-center lg:items-stretch mt-4">
                  <a
                    href={slide.ctas[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wide w-full lg:w-auto text-center transition bg-[rgba(7,53,89,0.7)] text-white hover:bg-blue-50 hover:text-[#073559]"
                  >
                    {slide.ctas[0].label}
                  </a>
                  <a
                    href={slide.ctas[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wide w-full lg:w-auto text-center transition border border-white text-white hover:bg-blue-50 hover:text-black"
                  >
                    {slide.ctas[1].label}
                  </a>
                </div>
              </div>
            </div>

            <img
              src={slide.rating}
              alt="ESRB Rating"
              className="absolute bottom-4 right-4 w-20 lg:w-24 z-30"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
