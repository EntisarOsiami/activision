import React from "react";

function JoinUsBanner() {
  return (
    <section className="relative w-full text-white overflow-hidden bg-black">
      <div
        className="absolute inset-0 hidden lg:block bg-no-repeat bg-left bg-cover"
        style={{ backgroundImage: "url('/joinus-banner-img-spyro.png')" }}
      />

      <div className="block lg:hidden relative w-full h-[200px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/joinus-banner-img-spyro.png')" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 35% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 100%)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 35% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[2000px] mx-auto px-6 py-10 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-center lg:h-[300px] gap-6">
          <div className="lg:col-span-2 flex flex-col justify-center  items-center space-y-4 text-left">
            <h2 className="text-5xl font-bold text-blue-400 uppercase">
              Have Fun
            </h2>
            <p className="text-2xl">Learn more about job opportunities</p>
            <a
              href="https://careers.activision.com"
              className="inline-block border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition text-base sm:text-lg font-semibold max-w-[200px] text-center"
            >
              Join Us
            </a>
          </div>

          <div className="lg:col-span-6 hidden lg:block" />

          <div className="lg:col-span-4 flex flex-col justify-start space-y-4 text-left">
            <h3 className="text-2xl font-bold mb-3 uppercase">Our Teams</h3>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-y-1 uppercase text-sm">
              <li>Game Design</li>
              <li>Art & Animation</li>
              <li>Brand Management</li>
              <li>Production</li>
              <li>Quality Assurance</li>
              <li>Customer Support</li>
              <li>Studio Operations</li>
              <li>Programming</li>
              <li>Finance & Accounting</li>
              <li>Human Resources</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUsBanner;
