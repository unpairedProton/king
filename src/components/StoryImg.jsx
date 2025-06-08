import React from 'react'
import hustleImg from '../assets/images/story/hustle.webp'
import tuAakeImg from '../assets/images/story/tu_aake.webp'
import maanImg from '../assets/images/story/maan.webp'
import afterlifeImg from '../assets/images/story/afterlife.webp'
import gucciImg from '../assets/images/story/gucci.webp'
import juliaImg from '../assets/images/story/julia.jpg'
import grammyImg from '../assets/images/story/grammy.webp'
import bumpaImg from '../assets/images/story/bumpa.webp'
import cannesImg from '../assets/images/story/cannes.webp'
import forbesImg from '../assets/images/story/forbes.webp'
import sonyImg from '../assets/images/story/sony.webp'
import alanImg from '../assets/images/story/alan.webp'


const StoryImg = () => {
    const story = [
    {
    imgUrl:hustleImg,
      date: "2019",
      title: "MTV Hustle - Season 1",
      Desc: 'Rising to national fame on MTV Hustle (2019), King captivated audiences with hits like "Ghumshudaa" (33M+ streams), "Badnaam Raja" (1M+ streams), and "Gold Digger" (3.5M+ streams). He reached the finals, cementing his potential for future stardom.',
    },

    {imgUrl:tuAakeImg,
      date: "2020",
      title: "Tu Aake Dekhle - The BIG Breakout",
      Desc: 'Though King released music earlier, his 2020 debut album "The Carnival" brought his breakout hit, "Tu Aake Dekhle." This song garnered over 200 million streams on YouTube, launching him to widespread fame.',
    },

    {imgUrl:maanImg,
      date: "2022",
      title: "Maan Meri Jaan Song - Spotify India's Most Streamed Song",
      Desc: "In 2022, King's 'Maan Meri Jaan' from the album 'Champagne Talk' became Spotify India's most streamed song of 2023. This monumental hit also topped charts on Apple Music and Shazam, cementing its global recognition.",
    },

    {imgUrl:afterlifeImg,
      date: "2023",
      title: "Maan Meri Jaan (Afterlife)  - Collaboration with Nick Jonas",
      Desc: "King's global appeal soared with 'Maan Meri Jaan (Afterlife),' a highly anticipated collaboration with American sensation Nick Jonas. This rendition brought the beloved track to new international audiences, showcasing a unique musical synergy.",
    },

    {imgUrl:gucciImg,
      date: "2023",
      title: "We Are The Ones - Collaboration with Gucci Mane",
      Desc: "A significant global collaboration features on King's 2023 album 'NEW LIFE' with the track 'We Are The Ones.' This song brings together King's unique artistry with American rap icon Gucci Mane, marking a powerful international crossover.",
    },

    {imgUrl:juliaImg,
      date: "2023",
      title: "Runaway - Collaboration with Julia Michaels",
      Desc: "King's 2023 album 'NEW LIFE' also features the soulful collaboration 'Runaway' with Grammy-nominated American singer-songwriter Julia Michaels, adding another international dimension to his sound.",
    },

    {imgUrl:grammyImg,
      date: "2023",
      title: "Grammy Recognision - Good Trip Song",
      Desc: "King's track 'Good Trip' from his 2023 album 'NEW LIFE' earned recognition from the Grammy Recording Academy. It was notably featured in their prestigious 'Global Spin' series, highlighting his unique sound to an international audience.",
    },

    {imgUrl:bumpaImg,
      date: "2024",
      title: "Bumpa Song - Worked with Jason Derulo",
      Desc: "King's 2024 single 'Bumpa' marked a groundbreaking international collaboration with global pop sensation Jason Derulo. This vibrant track combines their distinct styles, creating an undeniable summer anthem that introduced Derulo to his first official collaboration with an Indian artist.",
    },

    {imgUrl:cannesImg,
      date: "2024",
      title: "First Indian Pop Artist at Cannes Festival",
      Desc: "Making history, King became the first Indian pop artist to grace the prestigious Cannes Film Festival red carpet. This significant milestone underscored the growing global presence of Indian music and King's pioneering role within it."
    },

    {imgUrl:forbesImg,
      date: "2024",
      title: "Forbes 30 Under Asia",
      Desc: "Recognizing his immense impact, King was proudly featured in the prestigious Forbes 30 Under 30 Asia list for 2024. He was honored in the Entertainment & Sports category, solidifying his status as a leading young innovator in the region."
    },

    {imgUrl:sonyImg,
      date: "2024",
      title: "Sony Audio Brand Ambassador",
      Desc: "King serves as the official brand ambassador for Sony India's audio products, showcasing their cutting-edge sound technology. This role highlights his influence and passion for high-quality audio."
    },

    {imgUrl:alanImg,
      date: "2025",
      title: "Story of a Bird - Collaboration with Alan Walker",
      Desc: "A highly anticipated international collaboration, King joined forces with global DJ-producer Alan Walker for the track 'Story of a Bird.' Released in May 2025, this song blends their distinct styles, creating a unique sound experience."
    },
  ];

  return (
    <div className='story-line  w-full grid gap-4  justify-center ' >
        {story.map((item,i)=>(
            <div key={i} className='w-full h-fit flex flex-col gap-2 small' style={{
              gridArea: `img${i+1}`
              //see the index.css for more styling.
            }} >
                <div className='w-full' >
                    <img className='w-full' src={item.imgUrl} alt="" />
                </div>
                <div>{item.date}</div>
                <div>{item.title}</div>
                <div>{item.Desc}</div>
            </div>
            
        ))}
    </div>
  )
}

export default StoryImg