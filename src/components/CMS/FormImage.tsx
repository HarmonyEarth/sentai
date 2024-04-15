import React from "react";
import { FileState } from "../../types";
import { noImageIcon } from "../../constants";
import LazyImage from "../Loading/LazyImage";

interface Props {
  firestoreImage: string;
  image: FileState;
  imagePercent: number | null;
  imageName: string;
  mobile: boolean;
}

const FormImage: React.FC<Props> = ({
  firestoreImage,
  image,
  imagePercent,
  imageName,
  mobile,
}) => {
  const capitalizedWord =
    imageName.charAt(0).toUpperCase() + imageName.slice(1);

  return (
    <>
      <LazyImage
        src={
          firestoreImage ??
          (image
            ? URL.createObjectURL(image as Blob | MediaSource)
            : noImageIcon)
        }
        alt={`Team ${imageName}`}
        height={mobile ? "100px" : "200px"}
        width={"auto"}
      />

      <h3>{capitalizedWord}</h3>
      <p>
        {(imagePercent !== null && imagePercent < 100 && "File Uploading") ||
          (imagePercent === 100 && "File Uploaded")}
      </p>
    </>
  );
};

export default FormImage;
