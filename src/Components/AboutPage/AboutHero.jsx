
function AboutHero () {
  return (
    <section
      id="about-hero"
      className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="hidden lg:block w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url(/atvi-about-hero.jpg)",
          }}
        ></div>
        <div
          className="block lg:hidden w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url(/atvi-about-hero.jpg)",
          }}
        ></div>
       
      </div>

    </section>
  );
};

export default AboutHero;
