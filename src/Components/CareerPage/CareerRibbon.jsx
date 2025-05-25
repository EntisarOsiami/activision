import React from "react";

function CareersRibbon ()  {
  return (
    <section className="w-full h-auto overflow-hidden">
      <video
        className="w-full h-auto object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/careers/game-ap-look.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default CareersRibbon;
