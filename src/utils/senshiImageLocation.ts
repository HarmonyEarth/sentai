import { imageLocationText } from './constants';

interface Props {
  locationImage: string;
}

export const senshiImageLocation = ({ locationImage }: Props) => {
  let newLocation = {
    left: false,
    right: false,
  };

  switch (locationImage) {
    case imageLocationText.left:
      newLocation = {
        left: true,
        right: false,
      };
      break;
    case imageLocationText.center:
      newLocation = {
        left: false,
        right: false,
      };
      break;
    case imageLocationText.right:
      newLocation = {
        left: false,
        right: true,
      };
      break;
    default:
      break;
  }

  return newLocation;
};
