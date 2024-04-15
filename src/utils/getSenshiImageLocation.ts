import { SenshiImageLocation } from "../constants";

interface Props {
  locationImage: string;
}

export const getSenshiImageLocation = ({ locationImage }: Props) => {
  let newLocation = {
    left: false,
    right: false,
  };

  switch (locationImage) {
    case SenshiImageLocation.Left:
      newLocation = {
        left: true,
        right: false,
      };
      break;
    case SenshiImageLocation.Center:
      newLocation = {
        left: false,
        right: false,
      };
      break;
    case SenshiImageLocation.Right:
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
