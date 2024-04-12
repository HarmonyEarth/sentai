import React, { useEffect, useRef, useState } from "react";
import { siteLogo } from "../../constants";

const loadingGif =
  "https://firebasestorage.googleapis.com/v0/b/sentai-a6af6.appspot.com/o/images%2Floading%2Floading.webp?alt=media&token=35440339-02c8-4359-8a1e-4bce81879278";

const errorImage =
  "https://firebasestorage.googleapis.com/v0/b/sentai-a6af6.appspot.com/o/images%2Floading%2FerrorLoading.png?alt=media&token=6b86061b-54e0-4b12-9062-a2113a3eadb9";

interface Props {
  src: string;
  alt?: string;
  className?: string;
  height?: string;
  width?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const LazyImage: React.FC<Props> = ({
  src,
  alt,
  className,
  height,
  width,
  onClick,
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        entry.isIntersecting && setInView((prev) => true);
      });
    };

    let observer = new IntersectionObserver(callback);

    imgRef.current && observer.observe(imgRef.current);

    const image = new Image();
    image.onload = () => {
      setImageLoaded((prev) => true);
      setImageError(false);
    };
    image.onerror = () => setImageError((prev) => true);

    image.src = src;
    return () => {
      image.onload = null;
      image.onerror = null;
      observer.disconnect();
    };
  }, [src, imageLoaded, imageError]);

  return inView ? (
    <img
      src={imageError ? errorImage : imageLoaded ? src : loadingGif}
      alt={alt}
      loading="lazy"
      className={className}
      height={height}
      width={width}
      onClick={onClick}
    />
  ) : (
    <img
      src={siteLogo}
      ref={imgRef}
      alt={"Placeholder"}
      loading="lazy"
      className={className}
      height={height}
      width={width}
    />
  );
};

export default LazyImage;
