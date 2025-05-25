const categories = [
  {
    href: "https://careers.activision.com/art-animation-sound",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem11-1710455685013.png",
  },
  {
    href: "https://careers.activision.com/engineering-jobs",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem12-1710455727924.png",
  },
  {
    href: "https://careers.activision.com/c/production-jobs",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem13-1710455855824.png",
  },
  {
    href: "https://careers.activision.com/corporate-functions",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem14-1710456001039.png",
  },
  {
    href: "https://careers.activision.com/design",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem15-1710456129634.png",
  },
  {
    href: "https://careers.activision.com/marketing-sales",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem16-1710456257523.png",
  },
  {
    href: "https://careers.activision.com/c/quality-assurance-jobs",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem17-1710456307621.png",
  },
  {
    href: "https://activision.wd1.myworkdayjobs.com/CentralTech",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem18-1710456364531.png",
  },
  {
    href: "https://activision.wd1.myworkdayjobs.com/SS_external",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem19-1710456408214.png",
  },
];

function CareerCategories  () {
  return (
    <section className=" text-white py-20 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto text-center">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-12">
          Start Your Game Changing Career
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src={cat.img}
                className="w-full max-h-24 object-contain transition hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerCategories;
