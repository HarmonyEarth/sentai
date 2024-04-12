import FavIcon from "../favicon.ico";
import SuperSentaiLogo from "../logo192.png";

export const siteFavIcon = FavIcon;

export const siteLogo = SuperSentaiLogo;

export const noImageIcon =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png";

export const locationText = Object.freeze({
  topLeft: "top-left",
  topRight: "top-right",
  bottomLeft: "bottom-left",
  bottomRight: "bottom-right",
});

export const imageLocationText = Object.freeze({
  left: "Left",
  center: "Center",
  right: "Right",
});

export const memberInputData = [
  {
    formData: "heroId",
    placeholder: "harmony1",
    type: "text",
  },
  {
    formData: "position",
    placeholder: 1,
    type: "number",
  },
  {
    formData: "heroNameEN1",
    placeholder: "Akaki Sugata",
    type: "text",
  },
  {
    formData: "heroNameEN2",
    placeholder: "Harmony White",
    type: "text",
  },
  {
    formData: "heroNameJP1",
    placeholder: "獅子 走",
    type: "text",
  },
  {
    formData: "heroNameJP2",
    placeholder: "ガオレッド",
    type: "text",
  },
];

export const memberInputFileData = [
  {
    formData: "heroImage1",
    type: "file",
    accept: "image/*",
  },
  {
    formData: "heroImage2",
    type: "file",
    accept: "image/*",
  },
  {
    formData: "heroImage3",
    type: "file",
    accept: "image/*",
  },
  {
    formData: "heroImage4",
    type: "file",
    accept: "image/*",
  },
  {
    formData: "heroHelmet",
    type: "file",
    accept: "image/*",
  },
  {
    formData: "heroSymbol",
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
    name: locationText.topLeft,
  },
  {
    display: "Top Right",
    name: locationText.topRight,
  },
  {
    display: "Bottom Left",
    name: locationText.bottomLeft,
  },
  {
    display: "Bottom Right",
    name: locationText.bottomRight,
  },
];

export const memberInputImageLocation = [
  { imageLocationName: imageLocationText.left },
  { imageLocationName: imageLocationText.center },
  { imageLocationName: imageLocationText.right },
];

export const teamInputData = [
  {
    formData: "shortTeamName",
    placeholder: "Harmonyranger",
    type: "text",
  },
  {
    formData: "fullTeamNameEN",
    placeholder: "Melody Sentai Harmonyranger",
    type: "text",
  },
  {
    formData: "fullTeamNameJP",
    placeholder: "メロディー戦隊ハーモニーレンジャー",
    type: "text",
  },
  {
    formData: "year",
    placeholder: 2021,
    type: "number",
  },
  {
    formData: "teamId",
    placeholder: "melody21",
    type: "text",
  },
];

export const teamInputFileData = [
  {
    formData: "logo",
    type: "file",
    accept: "image/*",
  },
  {
    formData: "symbol",
    type: "file",
    accept: "image/*",
  },
];

export enum Purpose {
  Member = "member",
  Team = "team",
  Color = "color",
  TeamId = "teamId",
  LocationEN = "locationEN",
  LocationJP = "locationJP",
  LocationImage = "locationImage",
}
