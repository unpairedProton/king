import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/king_logo2.png";
// import { useGSAP } from '@gsap/react'
import gsap from "gsap";

const MenuText = () => {
  const nav = ["about", "story", "release"];
  // Create arrays of refs instead of single refs
  const navText1Refs = useRef(nav.map(() => React.createRef()));
  const navText2Refs = useRef(nav.map(() => React.createRef()));

  const handleMouseEnter = (index) => {
    gsap.to(navText1Refs.current[index].current, {
      y: "-100%",
      duration: 0.2,
      ease: "power1.inOut",
    });

    gsap.to(navText2Refs.current[index].current, {
      y: "-100%",
      duration: 0.2,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(navText1Refs.current[index].current, {
      y: "0",
      duration: 0.3,
      ease: "power1.inOut",
    });

    gsap.to(navText2Refs.current[index].current, {
      y: "0",
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  const handleLinkMouseEnter = (e) => {
    const arrow = e.currentTarget.querySelector(".arrow");
    gsap.to(arrow, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
  };

  const handleLinkMouseLeave = (e) => {
    const arrow = e.currentTarget.querySelector(".arrow");
    gsap.to(arrow, {
      opacity: 0,
      x: -50,
      duration: 0.5,
      ease: "power1.inOut",
    });
  };

  return (
    <>
      <header className="">
        <Link to={"/"} className="w-10 block">
          <img
            className="w-full h-full object-center object-cover"
            src={logo}
            alt=""
          />
        </Link>
      </header>
      <nav className=" w-full  uppercase font-[boldFont] text-xl">
        <ul className="flex flex-col">
          {nav.map((e, i) => (
            <Link to={'/' + e}
              key={i}
              className="overflow-hidden h-6 w-fit"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <div ref={navText1Refs.current[i]} className="h-full w-fit">
                {e}
              </div>
              <div ref={navText2Refs.current[i]} className="h-full w-fit">
                {e}
              </div>
            </Link>
          ))}
        </ul>
      </nav>
      <section className="small socials grid grid-rows-2 grid-cols-2 gap-2">
        <div>Follow</div>
        <div>
          <Link to={'https://www.instagram.com/ifeelking/?hl=en'}
            className="links block w-fit"
            onMouseEnter={handleLinkMouseEnter}
            onMouseLeave={handleLinkMouseLeave}
          >
            Instagram <span className="opacity-0  arrow"> &gt; </span>
          </Link>
          <Link to={`https://www.youtube.com/@King`}
            className="links block w-fit"
            onMouseEnter={handleLinkMouseEnter}
            onMouseLeave={handleLinkMouseLeave}
          >
            Youtube <span className="opacity-0  arrow"> &gt; </span>
          </Link>
        </div>
        <div>Listen</div>
        <div>
          <Link to={`https://open.spotify.com/artist/5NHm4TU5Twz7owibYxJfFU?si=8dyXLtD8QPGDVepyrpXS-A&nd=1&dlsi=65ea3fd945c44b37`}
            className="links block w-fit"
            onMouseEnter={handleLinkMouseEnter}
            onMouseLeave={handleLinkMouseLeave}
          >
            Spotify <span className="opacity-0  arrow"> {">"} </span>
          </Link>
          <Link to={`https://music.apple.com/us/artist/king/1489995981`}
            className="links block w-fit"
            onMouseEnter={handleLinkMouseEnter}
            onMouseLeave={handleLinkMouseLeave}
          >
            iCloud <span className="opacity-0  arrow"> &gt; </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MenuText;
