import React from 'react';
import { FileState } from '../../models/fileState';

interface Props {
  firestoreImage: string;
  image: FileState;
  imagePercent: number | null;
  imageName: string;
}
const noImageIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';
const FormImage: React.FC<Props> = ({
  firestoreImage,
  image,
  imagePercent,
  imageName,
}) => {
  return (
    <div>
      {firestoreImage ? (
        <img
          src={firestoreImage}
          alt={`Team ${imageName}`}
          height={'auto'}
          width={'100%'}
        />
      ) : (
        <img
          src={
            image
              ? URL.createObjectURL(image as Blob | MediaSource)
              : noImageIcon
          }
          alt={`Team ${imageName}`}
          height={'auto'}
          width={'100%'}
        />
      )}

      <h3>{imageName}</h3>
      <p>
        {(imagePercent !== null && imagePercent < 100 && 'File Uploading') ||
          (imagePercent === 100 && 'File Uploaded')}
      </p>
    </div>
  );
};

export default FormImage;
