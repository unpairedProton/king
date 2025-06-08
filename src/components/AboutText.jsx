import React from "react";

const AboutText = () => {

  const achives = [
    "Forbes 30 Under 30 Asia (2024)",
    "First Indian pop artist at Cannes Festival",
    "Sony Audio Brand Ambassador",
    "'Maan Meri Jaan' Spotify India's most streamed",
    "First Indian Rapper Collaborated with Nick Jonas",
    "First Indian Rapper Collaborated with Jason Derulo",
    "Colaborated with Alan Walker",
    " First Indian Rapper Colaborated with Gucci Mane",
    'Performed at IPL Final',
    '"Good Trip" featured by Grammy Academy',
  ]
  return (
    <div className="w-full  flex gap-10 lg:gap-6  flex-col lg:flex-row">
      <div className="flex-1 flex flex-col w-full gap-4" >
        <h1 className="small" >Rapper / Singer</h1>
        <p  className="font-semibold text-lg leading-5.5">
          King, often stylized as KING, is a prominent Indian rapper and singer who gained fame through MTV Hustle Season 1. Hailing from Delhi, he quickly rose to mainstream success with his unique fusion of melodic rap, heartfelt lyrics, and R&B influences.
        </p>
        <p  className="font-semibold text-lg leading-5.5">
         His music blends hip-hop beats with catchy melodies and bilingual lyrics, often exploring themes like love, ambition, and self-belief. Tracks like "Tu Aake Dekhle" and "Maan Meri Jaan" became viral hits, showcasing his distinctive vocal flow.
        </p>
         <p  className="font-semibold text-lg leading-5.5">
          King has played a key role in popularizing Indian hip-hop among wider audiences, balancing introspective raps with pop appeal. With consistent releases and live performances, he remains a leading voice in modern Indian music.
        </p>
      </div>

      <div className="small flex-col  flex gap-2 flex-1 w-full">
        {achives.map((achive, index) => (
          <h3 key={index} >{achive}</h3>
        ))}
        
      </div>
    </div>
  );
};

export default AboutText;
