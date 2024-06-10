import FavIcon from "../favicon.ico";
import SuperSentaiLogo from "../logo192.png";

export const siteFavIcon = FavIcon;

export const siteLogo = SuperSentaiLogo;

export const noImageIcon =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png";

export const loadingGif =
  "https://firebasestorage.googleapis.com/v0/b/sentai-a6af6.appspot.com/o/images%2Floading%2Floading.webp?alt=media&token=35440339-02c8-4359-8a1e-4bce81879278";

export const errorImage =
  "https://firebasestorage.googleapis.com/v0/b/sentai-a6af6.appspot.com/o/images%2Floading%2FerrorLoading.png?alt=media&token=6b86061b-54e0-4b12-9062-a2113a3eadb9";

export enum SenshiNameLocation {
  TopLeft = "top-left",
  TopRight = "top-right",
  BottomLeft = "bottom-left",
  BottomRight = "bottom-right",
}

export enum SenshiImageLocation {
  Left = "Left",
  Center = "Center",
  Right = "Right",
}

export enum Purpose {
  Member = "member",
  Team = "team",
  Song = "song",
  Color = "color",
  TeamId = "teamId",
  HeroId = "heroId",
  LocationEN = "locationEN",
  LocationJP = "locationJP",
  LocationImage = "locationImage",
  Position = "position",
  HeroNameEn1 = "heroNameEN1",
  HeroNameEn2 = "heroNameEN2",
  HeroNameJP1 = "heroNameJP1",
  HeroNameJP2 = "heroNameJP2",
  HeroImage1 = "heroImage1",
  HeroImage2 = "heroImage2",
  HeroImage3 = "heroImage3",
  HeroImage4 = "heroImage4",
  HeroHelmet = "heroHelmet",
  HeroSymbol = "heroSymbol",
  ShortTeamName = "shortTeamName",
  FullTeamNameEN = "fullTeamNameEN",
  FullTeamNameJP = "fullTeamNameJP",
  Year = "year",
  Logo = "logo",
  Symbol = "symbol",
}

export const memberInputData = [
  {
    formData: Purpose.HeroId,
    placeholder: "harmony1",
    type: "text",
  },
  {
    formData: Purpose.Position,
    placeholder: 1,
    type: "number",
  },
  {
    formData: Purpose.HeroNameEn1,
    placeholder: "Akaki Sugata",
    type: "text",
  },
  {
    formData: Purpose.HeroNameEn2,
    placeholder: "Harmony White",
    type: "text",
  },
  {
    formData: Purpose.HeroNameJP1,
    placeholder: "獅子 走",
    type: "text",
  },
  {
    formData: Purpose.HeroNameJP2,
    placeholder: "ガオレッド",
    type: "text",
  },
];

export const memberInputFileData = [
  {
    formData: Purpose.HeroImage1,
    type: "file",
    accept: "image/*",
  },
  {
    formData: Purpose.HeroImage2,
    type: "file",
    accept: "image/*",
  },
  {
    formData: Purpose.HeroImage3,
    type: "file",
    accept: "image/*",
  },
  {
    formData: Purpose.HeroImage4,
    type: "file",
    accept: "image/*",
  },
  {
    formData: Purpose.HeroHelmet,
    type: "file",
    accept: "image/*",
  },
  {
    formData: Purpose.HeroSymbol,
    type: "file",
    accept: "image/*",
  },
];

export const memberInputColorData = [
  "Red",
  "Blue",
  "Yellow",
  "Green",
  "Black",
  "Pink",
  "Silver",
  "Gold",
  "Orange",
  "Light Blue",
  "Purple",
  "White",
];

export const memberInputNameLocationData = [
  {
    display: "Top Left",
    name: SenshiNameLocation.TopLeft,
  },
  {
    display: "Top Right",
    name: SenshiNameLocation.TopRight,
  },
  {
    display: "Bottom Left",
    name: SenshiNameLocation.BottomLeft,
  },
  {
    display: "Bottom Right",
    name: SenshiNameLocation.BottomRight,
  },
];

export const memberInputImageLocation = [
  { imageLocationName: SenshiImageLocation.Left },
  { imageLocationName: SenshiImageLocation.Center },
  { imageLocationName: SenshiImageLocation.Right },
];

export const teamInputData = [
  {
    formData: Purpose.ShortTeamName,
    placeholder: "Harmonyranger",
    type: "text",
  },
  {
    formData: Purpose.FullTeamNameEN,
    placeholder: "Melody Sentai Harmonyranger",
    type: "text",
  },
  {
    formData: Purpose.FullTeamNameJP,
    placeholder: "メロディー戦隊ハーモニーレンジャー",
    type: "text",
  },
  {
    formData: Purpose.Year,
    placeholder: 2021,
    type: "number",
  },
  {
    formData: Purpose.TeamId,
    placeholder: "melody21",
    type: "text",
  },
];

export const teamInputFileData = [
  {
    formData: Purpose.Logo,
    type: "file",
    accept: "image/*",
  },
  {
    formData: Purpose.Symbol,
    type: "file",
    accept: "image/*",
  },
];

export enum Collections {
  Teams = "teams",
  Members = "members",
  Songs = "songs",
  GalleryImages = "galleryImages",
}
