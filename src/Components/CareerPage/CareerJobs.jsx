import React from "react";
import { FaHeart } from "react-icons/fa";

const jobs = [
  {
    title: "Senior Gameplay Engineer - High Moon Studios",
    category: "Programming/Software Engineering",
    reqId: "R024108",
    description:
      "Collaborate with designers and animators to create new Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game...",
    href: "https://careers.activision.com/job/R024108/Senior-Gameplay-Engineer-High-Moon-Studios",
    apply:
      "https://careers.activision.com/apply?jobSeqNo=ACPUUSR024108EXTERNAL",
  },
  {
    title: "Lead Analytics Engineer",
    category: "Data Analytics",
    reqId: "R024154",
    description:
      "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi...",
    href: "https://careers.activision.com/job/R024154/Lead-Analytics-Engineer",
    apply:
      "https://careers.activision.com/apply?jobSeqNo=ACPUUSR024154EXTERNAL",
  },
  {
    title: "Expert Animation Engineer - Infinity Ward",
    category: "Programming/Software Engineering",
    reqId: "R024307",
    description:
      "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th...",
    href: "https://careers.activision.com/job/R024307/Expert-Animation-Engineer-Infinity-Ward",
    apply:
      "https://careers.activision.com/apply?jobSeqNo=ACPUUSR024307EXTERNAL",
  },
  {
    title: "Senior AI Animator - Infinity Ward",
    category: "Animation",
    reqId: "R022959",
    description:
      "Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio...",
    href: "https://careers.activision.com/job/R022959/Senior-AI-Animator-Infinity-Ward",
    apply:
      "https://careers.activision.com/apply?jobSeqNo=ACPUUSR022959EXTERNAL",
  },
  {
    title: "Level Designer",
    category: "Game/Level Design",
    reqId: "R025221",
    description:
      "DWork with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...",
    href: "https://careers.activision.com/job/R025221/Level-Designer",
    apply:
      "https://careers.activision.com/apply?jobSeqNo=ACPUUSR025221EXTERNAL",
  },
];

function CareerJobs () {
  return (
    <section className=" text-white py-20 px-4 lg:px-8">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Be the First to Apply
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-lg p-6 shadow relative"
            >
              <div className="absolute top-4 right-4 text-gray-400 hover:text-black cursor-pointer text-2xl">
                <FaHeart />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                <a
                  href={job.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {job.title}
                </a>
              </h3>

              <div className="text-sm text-gray-600 mb-1">
                {job.category} &nbsp;
                <span className="text-gray-400">{job.reqId}</span>
              </div>

              <p className="text-base text-gray-800 mt-2 mb-4">
                {job.description}
              </p>

              <a
                href={job.apply}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2b2b2b] hover:bg-[#336e07] text-white text-sm font-semibold px-4 py-2 rounded transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerJobs;
