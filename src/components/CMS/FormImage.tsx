import React from 'react';
import { FileState } from '../../models/fileState';
import { noImageIcon } from '../../utils/constants';
import LazyImage from '../Loading/LazyImage';

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
        <LazyImage
          src={firestoreImage}
          alt={`Team ${imageName}`}
          height={'300px'}
          width={'auto'}
        />
      ) : (
        <LazyImage
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
