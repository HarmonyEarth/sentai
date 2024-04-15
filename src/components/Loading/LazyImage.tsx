import React, { useEffect, useRef, useState } from "react";
import { errorImage, loadingGif, siteLogo } from "../../constants";

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
