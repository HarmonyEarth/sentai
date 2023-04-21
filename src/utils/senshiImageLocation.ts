import { imageLocationText } from './constants';

interface Props {
  locationImage: string;
}

export const senshiImageLocation = ({ locationImage }: Props) => {
  let newLocation = '';

  switch (locationImage) {
    case imageLocationText.left:
      newLocation = 'flex-start';
      break;
    case imageLocationText.center:
      newLocation = 'center';
      break;
    case imageLocationText.right:
      newLocation = 'flex-end';
      break;
    default:
      break;
  }

  return newLocation;
};
