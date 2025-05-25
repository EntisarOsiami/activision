import React from "react";

const sections = [
  {
    title: "Our Locations",
    image:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566582196_PenFactory-1665997299565.jpg",
    href: "https://www.activision.com/company/locations",
  },
  {
    title: "DE&I",
    image:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566670572_PenFactory2-1665997596145.jpg",
    href: "https://www.activision.com/company/diversity-inclusion",
  },
  {
    title: "Early Careers",
    image:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566841083_EarlyCareersAP-1666643219491.jpg",
    href: "https://careers.activision.com/early-careers",
  },
  {
    title: "Mission & Talent Brand",
    image:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Capture4-1716042103068.png",
    href: "https://careers.activision.com/we-are-activision",
  },
];

function CareerWorld ()  {
  return (
    <section className="text-white py-20 px-4 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold uppercase mb-4">
          Explore Our World
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-black rounded overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition text-xs font-semibold uppercase"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerWorld;
