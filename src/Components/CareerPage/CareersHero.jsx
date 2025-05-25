function CareersHero  ()  {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/careers/EVPCareersiteherovideo5-1710271231185.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <a
          href="https://careers.activision.com/search-results"
          className="uppercase text-base font-semibold px-10 py-4 border text-white bg-[#4f4f4f] border-[#3e8909] hover:bg-[#3e8909] hover:text-white transition duration-300"
        >
          Search Jobs
        </a>
      </div>
    </section>
  );
};

export default CareersHero;
