import BlueHelmet from './images/turbo3-helmet.png';
import BlackHelmet from './images/turbo2-helmet.png';

const turbo = {
  shortTeamName: 'Turboranger',
  fullTeamName: 'Kousoku Sentai Turboranger',
  year: 1989,
  logo: 'https://static.wikia.nocookie.net/powerrangers/images/a/a0/Logo-turboranger.png',
  symbol:
    'https://static.wikia.nocookie.net/powerrangers/images/4/4a/Icon-turboranger.png',
  teamId: 'turbo89',
  teamMembers: [
    {
      heroId: 'turbo2',
      color: 'blue',
      position: 2,
      heroNameEN1: 'Daichi Yamagata',
      heroNameEN2: 'Black Turbo',
      heroNameJP1: '山形 大地',
      heroNameJP2: 'ブラックターボ',
      heroImage1:
        'https://static.wikia.nocookie.net/powerrangers/images/3/3e/TurborangerDaichiYamagata.jpg',
      heroImage2:
        'https://static.wikia.nocookie.net/powerrangers/images/f/f6/Turbo-black.png',
      heroHelmet: BlackHelmet,
      // heroHueRotation: '219deg',
    },
    {
      heroId: 'turbo3',
      color: 'black',
      position: 1,
      heroNameEN1: 'Youhei Hama',
      heroNameEN2: 'Blue Turbo',
      heroNameJP1: '浜 洋平',
      heroNameJP2: 'ブルーターボ',
      heroImage1:
        'https://static.wikia.nocookie.net/powerrangers/images/6/6a/TurborangerYouheiHama.jpg',
      heroImage2:
        'https://static.wikia.nocookie.net/powerrangers/images/f/f8/Turbo-blue.png',
      heroHelmet: BlueHelmet,
      // heroHueRotation: '180deg',
    },
  ],
};

export default turbo;
