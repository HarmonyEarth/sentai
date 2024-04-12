import { toast } from "react-hot-toast";
import type { FileState } from "../types";

interface ReplaceProps {
  filename: string;
  rawFile: File;
  setImage: React.Dispatch<React.SetStateAction<FileState>>;
}

const replaceWithWEBP = async ({
  filename,
  rawFile,
  setImage,
}: ReplaceProps) => {
  try {
    toast.loading(`Converting ${filename} to WEBP`);
    let newWEBP = await convertToWEBP({ rawFile });
    setImage(newWEBP);
    toast.dismiss();
    toast.success(`Successfully converted ${filename} to WEBP!`);
  } catch (err) {
    toast.dismiss();
    toast.error(`Failed to convert ${filename}, due to ${err}!`);
  } finally {
  }
};

export default replaceWithWEBP;

interface ConvertProps {
  rawFile: File;
}

const convertToWEBP = async ({ rawFile }: ConvertProps) => {
  return new Promise<Blob>((resolve, reject) => {
    let canvas = document.createElement("canvas");
    let canvasContext = canvas.getContext("2d");

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
            reject(new Error("Failed to convert to WebP"));
          }
        },
        "image/webp",
        0.9
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
