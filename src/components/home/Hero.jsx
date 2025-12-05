import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

export default function Hero() {
  const images = [
    "/assets/hero/hero1.png",
    "/assets/hero/hero2.png",
    "/assets/hero/hero3.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change image every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative h-[60vh] md:h-[80vh] rounded-2xl max-w-7xl mx-auto px-4 my-5 md:my-10 
        w-full flex justify-center items-center overflow-hidden shadow-xl ">
      {/* Background Images Layer */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`
              absolute inset-0 w-full h-full object-cover transition-all duration-[2500ms] ease-out
              ${i === index ? "opacity-100 scale-110" : "opacity-0 scale-100"}
            `}
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-100 font-bold mb-6 display-font">
          Graphic Designer
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
          Crafting bold visuals, brand identities, and stunning digital experiences.
        </p>

        <div className="max-w-2xl mx-auto">
          <SearchBar />
        </div>
      </div>

      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
    </section>
  );
}