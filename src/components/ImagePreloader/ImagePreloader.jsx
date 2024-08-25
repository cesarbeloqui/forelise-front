import { useState, useEffect, useMemo } from "react";
import { images } from "@/utils/importAssets";
import Loading from "../Loading/Loading";

export function ImagePreloader({ children, onImagesLoaded }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const imageUrls = useMemo(() => Object.values(images), [images]);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = reject;
      });
    };

    const preloadImages = async () => {
      try {
        await Promise.all(imageUrls.map(loadImage));
        setFadeOut(true);
          setTimeout(() => setImagesLoaded(true), 1000); // Ajusta el tiempo de la transición
          if (onImagesLoaded) onImagesLoaded(imageUrls);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();

    return () => {
      // Aquí puedes agregar lógica para limpiar si es necesario
    };
  }, [imageUrls]);

  if (!imagesLoaded) {
    return (
      <div
        className={`flex items-center justify-center h-screen bg-gray-100 transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <Loading/>
      </div>
    );
  }

  return <>{children}</>;
}
