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
    case 'top-left':
      newSpot = {
        top: true,
        bottom: false,
        left: true,
        right: false,
      };
      break;
    case 'top-right':
      newSpot = {
        top: true,
        bottom: false,
        left: false,
        right: true,
      };
      break;
    case 'bottom-left':
      newSpot = {
        top: false,
        bottom: true,
        left: true,
        right: false,
      };
      break;
    case 'bottom-right':
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
