import { locationText } from './constants';

interface Props {
  location: string;
}
export const senshiNameLocation = ({ location }: Props) => {
  let newSpot = {
    top: false,
    bottom: false,
    left: false,
    right: false,
  };

  switch (location) {
    case locationText.topLeft:
      newSpot = {
        top: true,
        bottom: false,
        left: true,
        right: false,
      };
      break;
    case locationText.topRight:
      newSpot = {
        top: true,
        bottom: false,
        left: false,
        right: true,
      };
      break;
    case locationText.bottomLeft:
      newSpot = {
        top: false,
        bottom: true,
        left: true,
        right: false,
      };
      break;
    case locationText.bottomRight:
      newSpot = {
        top: false,
        bottom: true,
        left: false,
        right: true,
      };
      break;
    default:
      break;
  }

  return newSpot;
};
