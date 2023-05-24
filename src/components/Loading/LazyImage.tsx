import React, { useEffect, useState } from 'react';

const loadingGif =
  'https://firebasestorage.googleapis.com/v0/b/sentai-a6af6.appspot.com/o/images%2Floading%2Floading.webp?alt=media&token=35440339-02c8-4359-8a1e-4bce81879278';

const errorImage =
  'https://firebasestorage.googleapis.com/v0/b/sentai-a6af6.appspot.com/o/images%2Floading%2FerrorLoading.png?alt=media&token=6b86061b-54e0-4b12-9062-a2113a3eadb9';

interface Props {
  src: string;
  alt?: string;
  className?: string;
  height?: string;
  width?: string;
}

const LazyImage: React.FC<Props> = ({ src, alt, className, height, width }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  // const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setImageLoaded((prev) => true);
    // image.onerror = () => setImageError((prev) => true);

    image.src = src;
    return () => {
      image.onload = null;
      // image.onerror = null;
    };
  }, [src]);

  return (
    <img
      src={imageLoaded ? src : loadingGif}
      alt={alt}
      loading="lazy"
      className={className}
      height={height}
      width={width}
    />
  );
};

export default LazyImage;
