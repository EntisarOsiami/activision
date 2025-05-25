import React from "react";

function AboutStory  () {
  return (
    <section
      id="about-our-story"
      className="bg-black py-10 px-4 md:px-8 lg:px-16 text-white text-center"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6  border-b-2 border-gray-500 pb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg  mx-auto inline-block">
            At Activision, we strive to create the most iconic brands in gaming
            and entertainment. We’re driven by our mission to deliver unrivaled
            gaming experiences for the world to enjoy, together. Home to iconic
            franchises like <strong>Call of Duty®</strong>,{" "}
            <strong>Crash Bandicoot™</strong>, and{" "}
            <strong>Tony Hawk’s™ Pro Skater™</strong>, we're a global leader in
            interactive entertainment. Our goal? Delight millions with
            innovative, fun, and engaging games. With a legacy of success, we're
            pushing boundaries with cutting-edge technology and inclusive
            practices. Join us in delivering unforgettable entertainment and
            seize the chance to level up your career.
          </p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6  border-b-2 border-gray-500 pb-4">
            Activate Your Future
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4  mx-auto">
            We unite our global player community with epic entertainment,
            focusing on three core pillars:
          </p>
          <ul className="text-gray-300 space-y-2 text-base md:text-lg max-w-xl mx-auto text-left md:text-center list-none">
            <li>
              <strong>People</strong> – fostering talent and learning
              opportunities.
            </li>
            <li>
              <strong>Innovation</strong> – consistently pushing to iterate and
              evolve.
            </li>
            <li>
              <strong>Excellence</strong> – delivering high-quality games,
              consistently year in and year out.
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mt-4  mx-auto">
            Join us at Activision, where inclusivity thrives, and together we
            shape the future of entertainment for our players. Explore open
            roles now!
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase mb-5  border-b-2 border-gray-500 pb-4">
            Our Values
          </h2>
          <img
            src="/atvi-values.png"
            alt="Activision values wheel"
            className="mx-auto max-w-full"
          />
          <div className="mt-8">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
