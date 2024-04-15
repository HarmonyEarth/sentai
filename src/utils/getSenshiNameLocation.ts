import { SenshiNameLocation } from "../constants";

interface Props {
  location: string;
}
export const getSenshiNameLocation = ({ location }: Props) => {
  let newSpot = {
    top: false,
    bottom: false,
    left: false,
    right: false,
  };

  switch (location) {
    case SenshiNameLocation.TopLeft:
      newSpot = { ...newSpot, top: true, left: true };
      break;
    case SenshiNameLocation.TopRight:
      newSpot = { ...newSpot, top: true, right: true };
      break;
    case SenshiNameLocation.BottomLeft:
      newSpot = { ...newSpot, bottom: true, left: true };
      break;
    case SenshiNameLocation.BottomRight:
      newSpot = { ...newSpot, bottom: true, right: true };
      break;
    default:
      console.error(`Invalid location: ${location}`);
      break;
  }

  return newSpot;
};

export const modifyLocation = ({ location }: Props) => {
  switch (location) {
    case SenshiNameLocation.TopLeft:
      return SenshiNameLocation.BottomLeft;
    case SenshiNameLocation.TopRight:
      return SenshiNameLocation.BottomRight;
    default:
      return location;
  }
};
