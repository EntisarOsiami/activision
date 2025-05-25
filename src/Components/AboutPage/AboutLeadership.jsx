
const leaders = [
  {
    name: "Rob Kostich",
    title: "President",
    image: "/leadership/rob-kostich.jpg",
  },
  {
    name: "Josh Taub",
    title: "Chief Operating Officer",
    image: "/leadership/josh-taub.jpg",
  },
  {
    name: "Suzie Carr",
    title: "Chief People Officer",
    image: "/leadership/suzie-carr.jpg",
  },
  {
    name: "Terri Durham",
    title: "SVP & General Counsel",
    image: "/leadership/terri-durham.jpg",
  },
  {
    name: "David Stohl",
    title: "Head of Development, Call of Duty",
    image: "/leadership/dave-stohl.jpg",
  },
  {
    name: "Pat Kelly",
    title: "Head of Creative, Call of Duty",
    image: "/leadership/patt-kelly.jpg",
  },
  {
    name: "Tyler Bahl",
    title: "SVP, Head of Marketing",
    image: "/leadership/tyler-bahl.jpg",
  },
  {
    name: "Natasha Tatarchuk",
    title: "SVP, Chief Technology Officer",
    image: "/leadership/natasha.jpg",
  },
  {
    name: "Matt Cox",
    title: "GM, Call of Duty",
    image: "/leadership/matt-cox.jpg",
  },
];

function AboutLeadership  ()  {
  return (
<section
  id="about-leadership-team"
  className="bg-black text-white py-20 px-4 md:px-8 lg:px-16"
>
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-2xl lg:text-3xl font-extrabold uppercase mb-6 border-b-2 border-gray-500 pb-4">
      Our Leadership Team
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {leaders.map((leader) => (
        <div
          key={leader.name}
          className="flex flex-col items-center text-center space-y-2"
        >
          <img
            src={leader.image}
            alt={leader.name}
            className="w-32 h-32 lg:w-70 lg:h-70 object-cover rounded-full border-2"
          />
          <p className="font-semibold text-white">{leader.name}</p>
          <p className="text-gray-400 text-sm">{leader.title}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default AboutLeadership;
