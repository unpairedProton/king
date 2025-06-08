import React, { useEffect, useRef, useState } from "react";
import demoImg from "../assets/images/king_about.png"; // Uncomment and fix this import

export default function ParallaxImageStack() {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const [isHovering, setIsHovering] = useState(false);

  // Replace this line
  // const demoImage ="../assets/images/king_about.png";
  const demoImage = demoImg; // Use the imported image

  useEffect(() => {
    const container = containerRef.current;
    const images = imagesRef.current;

    // bhai container and image m kuch hai na
    if (!container || images.length === 0) return;

    // Mouse movement handler
    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - top) / height - 0.5; // -0.5 to 0.5

      // Apply transform to each image with different intensity based on its index
      images.forEach((img, index) => {
        const depth = (images.length - index) * 20; // More depth for top layers
        const scale = imageStyles[index].scale; // Get the original scale
        img.style.transition = isHovering
          ? "transform 0.8s ease-out"
          : "transform 0.3s ease-out";
        img.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0) 
                              rotateX(${-y * 8}deg) rotateY(${x *8}deg) scale(${scale})`;
      });
    };

    // Add event listeners
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", () => setIsHovering(true));
    container.addEventListener("mouseleave", () => {
      setIsHovering(false);
      // Reset positions when mouse leaves while maintaining scale
      images.forEach((img, index) => {
        const scale = imageStyles[index].scale;
        img.style.transition = "transform 0.2s ease-out";
        img.style.transform = `translate3d(0, 0, 0) rotateX(0) rotateY(0) scale(${scale})`;
      });
    });


     
    // Cleanup function
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", () => setIsHovering(true));
      container.removeEventListener("mouseleave", () => setIsHovering(false));
    };
  }, [isHovering]);

  // Function to add image refs to the array
  const addImageRef = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };
const imageStyles = [
    { opacity: 0.9, scale: 0.80 },
    { opacity: 0.8, scale: 0.85 },
    { opacity: 0.7, scale: 0.90 },
    { opacity: 0.6, scale: 0.95 },
    { opacity: 0.4, scale: 1.0 },
  ];
 

  return (
    
      <div className=" h-[80%] flex-1 flex justify-center items-center shrink-0 ">
        <div
          ref={containerRef}
          className="relative w-full h-full  object-cover object-center"
          style={{ perspective: "1500px" }}
        >
          {imageStyles.map((style, index) => (
            <img
              key={index}
              ref={addImageRef}
              src={demoImage}
              alt={`Depth layer ${index}`}
              className="absolute w-full h-full object-cover object-center"
              style={{
                opacity: style.opacity,
                transform: `scale(${style.scale})`,
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transformOrigin: "center center",
              }}
            />
          ))}
        </div>
      </div>
    
  );
}
