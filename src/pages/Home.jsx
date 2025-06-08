import React, { useEffect, useRef } from "react";

import Loading from "../components/Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { images } from "../assets/constants";
import Navbar from "../components/Navbar";

const Home = () => {
  const heroBg = useRef(null);
  const heroText = useRef(null);
  // const heroLettersRef = useRef(null);

  const splitHeroText = () => {
    if (heroText.current) {
      const heroTextForAni = heroText.current.innerText;
      const splitText = heroTextForAni.split("");
      let clut = "";
      splitText.forEach((element) => {
        clut += `<span class="hero-letter" >${element}</span>`;
      });
      heroText.current.innerHTML = clut;

      // Animate each letter individually
      gsap.set(".hero-letter", {
        display: "inline-block", // Ensure letters can be animated independently
        // opacity: 0,
        y: "100%",
      });

      gsap.to(".hero-letter", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // Time between each letter animation
        delay: 3.5,
        ease: "power1.out", // Wait for the loading animation to complete
      });
    }
  };

  useEffect(() => {
    splitHeroText();
  }, []);

  useGSAP(() => {
    gsap.from(heroBg.current, {
      scale: 1.05,
      y: 50,
      duration: 1.5,
      delay: 4, // Adjust delay relative to the letter animation if needed
    });
  });

  return (
    <div className="w-full relative h-full flex flex-col bg-zinc-900 z-0 overflow-hidden">
      <Loading />
      <div
        ref={heroBg}
        className="heroImg w-full flex justify-center items-center h-screen z-0 absolute top-0 left-0 bg-center grow bg-cover"
        style={{
          backgroundImage: `url(${images.find((image) => image.id === "hero").image})`,
        }}
      >
        <div className=" overflow-y-hidden  translate-y-60 md:translate-y-40">
          <div
            ref={heroText}
            className="heroText text-[18vw]  leading-50 tracking-normal font-['boldFont'] text-white font-bold "
          >
            KING
          </div>
        </div>
      </div>
     <Navbar></Navbar>
    </div>
  );
};

export default Home;
