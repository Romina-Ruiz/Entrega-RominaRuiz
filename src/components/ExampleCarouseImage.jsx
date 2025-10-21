import React from "react";
import Image from "react-bootstrap/Image";

function ExampleCarouselImage({ src, alt }) {
  
  return <Image className="carousel-box" src={src} alt={alt} fluid />;
}

export default ExampleCarouselImage;