import React from "react";
const Image = ({ src, alt }) => {
  return (
    <img
      className="w-[500px] h-[500px] object-center  rounded-2xl "
      src={src}
      alt={alt}
    />
  );
};

export default Image;
