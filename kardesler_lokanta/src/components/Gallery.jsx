import React from "react";
import Image from "./Image";
import styles from "../style";
const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/gallery/g1.jpeg?raw=true",
      alt: "Mountain",
    },
    {
      id: 2,
      src: "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/gallery/g2.jpeg?raw=true",
      alt: "Beach",
    },
    {
      id: 3,
      src: "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/gallery/g3.jpeg?raw=true",
      alt: "Forest",
    },
    {
      id: 4,
      src: "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/gallery/g4.jpeg?raw=true",
      alt: "City",
    },
    {
      id: 5,
      src: "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/gallery/g5.jpeg?raw=true",
      alt: "Building",
    },
    {
      id: 6,
      src: "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/gallery/g6.jpeg?raw=true",
      alt: "Road",
    },
    {
      id: 7,
      src: "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/gallery/g7.jpeg?raw=true",
      alt: "Road",
    },
    {
      id: 8,
      src: "https://github.com/RealCodeMate/kardesler_lokanta/blob/main/kardesler_lokanta/src/assets/gallery/g8.jpeg?raw=true",
      alt: "Road",
    },
  ];

  return (
    <div id="galeri">
      <div>
        <h2 className={`${styles.heading2} text-center mt-10 mb-10`}>Galeri</h2>
      </div>
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 gap-14">
        {images.map((image) => (
          <Image key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
