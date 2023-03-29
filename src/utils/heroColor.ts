export const heroColor = (color: string) => {
  let newHeroColor = '';
  switch (color) {
    case 'Red':
      newHeroColor = '#F10C0C';
      break;
    case 'Blue':
      newHeroColor = '#0055FF';
      break;
    case 'Yellow':
      newHeroColor = '#FFFE00';
      break;
    case 'Green':
      newHeroColor = '#24CC37';
      break;
    case 'Black':
      newHeroColor = '#2E1033';
      break;
    case 'Pink':
      newHeroColor = '#FE58E1';
      break;
    case 'Silver':
      newHeroColor = '#C0C0C0';
      break;
    case 'Gold':
      newHeroColor = '#FFD700';
      break;
    case 'Orange':
      newHeroColor = '#FF8E00';
      break;
    case 'Light Blue':
      newHeroColor = '#00B6FF';
      break;
    case 'Purple':
      newHeroColor = '#BC00FF';
      break;
    case 'White':
      newHeroColor = '#FFFFFF';
      break;
    default:
      break;
  }

  return newHeroColor;
};
