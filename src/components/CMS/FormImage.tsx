import React from 'react';
import { FileState } from '../../models/types';
import { noImageIcon } from '../../utils/constants';
import LazyImage from '../Loading/LazyImage';

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
  return (
    <>
      <LazyImage
        src={
          firestoreImage
            ? firestoreImage
            : image
            ? URL.createObjectURL(image as Blob | MediaSource)
            : noImageIcon
        }
        alt={`Team ${imageName}`}
        height={mobile ? '100px' : '200px'}
        width={'auto'}
      />

      <h3>{imageName}</h3>
      <p>
        {(imagePercent !== null && imagePercent < 100 && 'File Uploading') ||
          (imagePercent === 100 && 'File Uploaded')}
      </p>
    </>
  );
};

export default FormImage;
