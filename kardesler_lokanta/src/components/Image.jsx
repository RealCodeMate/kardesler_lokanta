import React from "react";
const Image = ({ src, alt }) => {
  return (
    <img className="w-full h-full object-cover rounded" src={src} alt={alt} />
  );
};

export default Image;
