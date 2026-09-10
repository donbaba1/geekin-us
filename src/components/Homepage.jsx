import React from "react";
import Hero from "../sections/Hero";
import WhyGeekin from "../sections/WhyGeekin";
import WhoWeServe from "../sections/WhoWeServe";
import Services from "../sections/Services";

const Homepage = () => {
  return (
    <>
      <main>
        <Hero />
        <WhyGeekin />
        <WhoWeServe />
        <Services />
      </main>
    </>
  );
};

export default Homepage;
