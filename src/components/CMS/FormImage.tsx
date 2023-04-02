import React from 'react';
import { FileState } from '../../models/fileState';
import { noImageIcon } from '../../utils/constants';

interface Props {
  firestoreImage: string;
  image: FileState;
  imagePercent: number | null;
  imageName: string;
}

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
          height={'300px'}
          width={'auto'}
        />
      ) : (
        <img
          src={
            image
              ? URL.createObjectURL(image as Blob | MediaSource)
              : noImageIcon
          }
          alt={`Team ${imageName}`}
          height={'200px'}
          width={'auto'}
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
