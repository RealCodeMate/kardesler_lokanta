import React from "react";
import Image from "./Image";
import styles from "../style";
const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://source.unsplash.com/random/800x800?mountain",
      alt: "Mountain",
    },
    {
      id: 2,
      src: "https://source.unsplash.com/random/800x800?beach",
      alt: "Beach",
    },
    {
      id: 3,
      src: "https://source.unsplash.com/random/800x800?forest",
      alt: "Forest",
    },
    {
      id: 4,
      src: "https://source.unsplash.com/random/800x800?city",
      alt: "City",
    },
    {
      id: 5,
      src: "https://source.unsplash.com/random/800x800?building",
      alt: "Building",
    },
    {
      id: 6,
      src: "https://source.unsplash.com/random/800x800?road",
      alt: "Road",
    },
  ];

  return (
    <div>
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
