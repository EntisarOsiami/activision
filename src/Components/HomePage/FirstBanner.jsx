import React from 'react';

function FirstBanner() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-2/3 bg-no-repeat bg-cover bg-right"
        style={{ backgroundImage: "url('/support-banner.jpg')" }}
      />

      <div
        className="block lg:hidden h-[200px] bg-cover bg-center"
        style={{ backgroundImage: "url('/support-banner.jpg')" }}
      />

      <div className="relative z-10 mx-auto px-6 py-12 max-w-[2000px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="lg:w-1/3 text-center lg:text-left space-y-4">
            <h3 className="text-3xl font-bold uppercase">We're here to help!</h3>
            <p className="text-2xl">
              Get answers to frequently asked questions, check server status, and engage with a support expert.
            </p>
            <a
              href="https://support.activision.com"
              className="inline-block border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition text-base font-semibold"
            >
              Visit Support
            </a>
          </div>

          <div className="hidden lg:block w-2/3 h-[300px]" />
        </div>
      </div>
    </section>
  );
}

export default FirstBanner;
