import React, { useContext } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ContextSong } from "../utils/Context";
// Assuming the 'releases' data is imported from a file like './data/releases.js'
// import { releases } from './data/releases'; // If in a separate file

// --- Your improved 'releases' data goes here ---
const releases = [
  {
    year: 2025,
    songs: [
      { title: "Story of a Bird", Url: "https://www.youtube.com/embed/fCy7NpdlqyA" },
      { title: "Stay", Url: "https://www.youtube.com/embed/iDEi7HtnJfg" },
      { title: "Till The End", Url: "https://www.youtube.com/embed/_loZYFL5Aw0" },
      { title: "Pray", Url: "https://www.youtube.com/embed/HVY2VejF_YM" },
    ],
  },
  {
    year: 2024,
    songs: [
      { title: "Bumpa", Url: "https://www.youtube.com/embed/VFourQX_I0A" },
      { title: "Maan Meri Jaan (Afterlife)", Url: "https://www.youtube.com/embed/ULcyLYD3o_M" },
      { title: "Tera ho ke", Url: "https://www.youtube.com/embed/fpc3cdpVc9M" },
      { title: "Goat Shit", Url: "https://www.youtube.com/embed/gcOyAwm2zp8" },
      { title: "Bawe Main Check", Url: "https://www.youtube.com/embed/TyD-e7niSpE" },
      { title: "War Cry", Url: "https://www.youtube.com/embed/HYFON9SxIf0" },
      { title: "Still The Same", Url: "https://www.youtube.com/embed/plZa9M19W1c" },
      { title: "Supreme Leader", Url: "https://www.youtube.com/embed/6dNRJEebVtY" },
      { title: "Kodak", Url: "https://www.youtube.com/embed/Ecs-foVS74Q" },
      { title: "MisFit", Url: "https://www.youtube.com/embed/u8GrQkzzJZ4" },
      { title: "Saza", Url: "https://www.youtube.com/embed/fp2cj-3J_G8" },
    ],
  },
  {
    year: 2023,
    songs: [
      { title: "Good Trip", Url: "https://www.youtube.com/embed/w9qyXg8t0s4" },
      { title: "Runaway", Url: "https://www.youtube.com/embed/dK2GnR_mw6s" },
      { title: "Sarkaare", Url: "https://www.youtube.com/embed/zrH9AtrdcxI" },
      { title: "We Are The Ones", Url: "https://www.youtube.com/embed/03QGtJzKbEA" },
      { title: "Crown", Url: "https://www.youtube.com/embed/nbNbfiJszHw" },
      { title: "Legends", Url: "https://www.youtube.com/embed/Vuh4HTjM68Y" },
      { title: "Tu Jaana Na Piya", Url: "https://www.youtube.com/embed/DDvapuQGV84" },
      { title: "Aafat", Url: "https://www.youtube.com/embed/RYI12J1nz4A" },
    ],
  },
  {
    year: 2022,
    songs: [
      { title: "OOPS", Url: "https://www.youtube.com/embed/wo2-ldwHqyQ" },
      { title: "MAAN MERI JAAN", Url: "https://www.youtube.com/embed/VuG7ge_8I2Y" },
      { title: "Champagne Talk", Url: "https://www.youtube.com/embed/ehESUpO5kl4" },
      { title: "Me & Me", Url: "https://www.youtube.com/embed/vsYc58DyGxg" },
      { title: "Dejalo", Url: "https://www.youtube.com/embed/uuKUBtGzrg0" },
      { title: "Na Ja Tu", Url: "https://www.youtube.com/embed/E_k2wygYfsQ" },
      { title: "Pablo", Url: "https://www.youtube.com/embed/-Xx0xnlBVzc" },
    ],
  }
]

// --- End of 'releases' data ---

function ReleasesList() {
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

  const { setSongPlay} = useContext(ContextSong);

  return (
    <section className="bg-zinc-900  p-8 min-h-screen small ">
      <h2 className="mb-12">Releases</h2>

      <div className="flex flex-col space-y-6">
        {releases.map((releaseBlock) => (
          <div
            key={releaseBlock.year}
            className="flex flex-col md:flex-row md:space-x-12"
          >
            {/* Year on the left */}
            <div className="md:w-1/4 ">{releaseBlock.year}</div>

            {/* Songs on the right */}
            <div className="md:w-3/4 flex flex-col">
              {releaseBlock.songs.map((song, songIndex) => (
                <div
                  onMouseEnter={handleLinkMouseEnter}
                  onMouseLeave={handleLinkMouseLeave}
                  onClick={()=>{
                    setSongPlay(song.Url);
                  }
                  }

                  key={songIndex}
                  className=""
                ><span>{song.title}</span><span className="opacity-0  arrow"> {">"} </span>
                 
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReleasesList;
