interface Props {
  rawFile: File;
}

const convertToWEBP = async ({ rawFile }: Props) => {
  return new Promise<Blob>((resolve, reject) => {
    let canvas = document.createElement('canvas');
    let canvasContext = canvas.getContext('2d');

    let src = URL.createObjectURL(rawFile);

    let rawImage = new Image();

    const onLoad = () => {
      canvas.width = rawImage.width;
      canvas.height = rawImage.height;
      canvasContext?.drawImage(rawImage, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to convert to WebP'));
          }
        },
        'image/webp',
        1
      );

      URL.revokeObjectURL(src); // Release the object URL
    };

    const onError = (error: Event | string) => {
      reject(error);
    };

    rawImage.onload = onLoad;
    rawImage.onerror = onError;

    rawImage.src = src;

    return () => {
      rawImage.onload = null; // Clean up the onload event handler
      rawImage.onerror = null; // Clean up the onerror event handler
    };
  });
};

export default convertToWEBP;
