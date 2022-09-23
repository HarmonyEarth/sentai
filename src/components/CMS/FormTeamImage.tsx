import React from 'react';
import { FileState } from '../AddTeam/TeamFormSection';

interface Props {
  image: FileState;
  imagePercent: number | null;
  imageName: string;
}
const noImageIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';
const FormTeamImage: React.FC<Props> = ({ image, imagePercent, imageName }) => {
  return (
    <div>
      <img
        src={
          image ? URL.createObjectURL(image as Blob | MediaSource) : noImageIcon
        }
        alt="Team Logo"
        height={'auto'}
        width={'100%'}
      />
      <h3>{imageName}</h3>
      <p>
        {(imagePercent !== null && imagePercent < 100 && 'File Uploading') ||
          (imagePercent === 100 && 'File Uploaded')}
      </p>
    </div>
  );
};

export default FormTeamImage;
