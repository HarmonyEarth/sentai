import { imageLocationText } from './constants';

interface Props {
  locationImage: string;
}

export const senshiImageLocation = ({ locationImage }: Props) => {
  let newLocation = {
    left: false,
    center: false,
    right: false,
  };

  switch (locationImage) {
    case imageLocationText.left:
      newLocation = {
        left: true,
        center: false,
        right: false,
      };
      break;
    case imageLocationText.center:
      newLocation = {
        left: false,
        center: true,
        right: false,
      };
      break;
    case imageLocationText.right:
      newLocation = {
        left: false,
        center: false,
        right: true,
      };
      break;
    default:
      break;
  }

  return newLocation;
};
