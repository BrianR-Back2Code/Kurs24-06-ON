import React, { useEffect } from "react";
import SimpleParallax from "simple-parallax-js";
import "./Content.css";

const MyContent = () => {
  useEffect(() => {
    // Initialize the parallax effect on all images with the class 'parallax-image'
    const images = document.querySelectorAll(".parallax-image");
    new SimpleParallax(images, {
      scale: 1.6, // Scale the image on scroll
      delay: 0.1, // Delay for smooth effect
      transition: "cubic-bezier(0,0,0,1)", // Transition effect
    });
  }, []);

  const imageSources = [
    "./picture/Banner.jpg", // Example image URLs
    "./picture/bgmepine.png",
    "./picture/r.png",
    "./picture/r2.png",
    "./picture/r3.png",
    "./picture/r4.png",
    "./picture/TARN.jpg",
    "./picture/TARN2.jpg",
    "./picture/TARN3.jpg",
    "./picture/TARN4.jpg",
  ];

  return (
    <div className="content-container">
      {imageSources.map((src, index) => (
        <div key={index} className="image-container">
          <img
            className="parallax-image"
            src={src}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default MyContent;
