interface Props {
  rawFile: File;
}

const convertToWEBP = async ({ rawFile }: Props) => {
  return new Promise<Blob>((resolve, reject) => {
    let canvas = document.createElement('canvas');
    let canvasContext = canvas.getContext('2d');

    let src = URL.createObjectURL(rawFile);

    let rawImage = new Image();

    rawImage.onload = () => {
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
    };

    rawImage.onerror = (error) => {
      reject(error);
    };

    rawImage.src = src;
  });
};

export default convertToWEBP;
