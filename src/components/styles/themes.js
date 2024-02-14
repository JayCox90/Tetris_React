import React from "react";
import starsImg from "../../assets/img/bg.png";
import cloudImg from "../../assets/img/clouds.jpg";
import hellImg from "../../assets/img/hellscape.jpg";
import rainbowImg from "../../assets/img/rainbow.jpg";
import blackholeBG from "../../assets/img/tetris_bg.jpg";
import unicornBG from "../../assets/img/unicorn.jpg";
import dramaBG from "../../assets/img/drama.jpg";
export const ThemeContext = React.createContext();

export const themes = [
  {
    name: "default",
    background: starsImg,
    0: "0, 0, 0",
    I: "80, 227, 230",
    J: "36, 95, 223",
    L: "223, 173, 36",
    O: "223, 217, 36",
    S: "48, 211, 56",
    T: "132, 61, 198",
    Z: "227, 78, 78",
  },
  {
    name: "clouds",
    background: cloudImg,
    0: "0, 0, 0",
    I: "135,206,250",
    J: "135, 206, 235",
    L: "176, 224, 230",
    O: "173, 216, 230",
    S: "173, 216, 230",
    T: "175, 238, 238",
    Z: "210, 240, 240",
  },
  {
    name: "drama",
    background: dramaBG,
    0: "252, 226, 186",
    I: "19, 22, 16",
    J: "19, 22, 16",
    L: "19, 22, 16",
    O: "19, 22, 16",
    S: "19, 22, 16",
    T: "19, 22, 16",
    Z: "19, 22, 16",
  },
  {
    name: "hellscape",
    background: hellImg,
    0: "0, 0, 0",
    I: "104,4,1",
    J: "250, 151, 22",
    L: "217, 62, 11",
    O: "139, 8, 13",
    S: "70, 1, 0",
    T: "162, 16, 2",
    Z: "209, 51, 5",
  },
  {
    name: "rainbow",
    background: rainbowImg,
    0: "0,0,0",
    I: "240,0,0",
    J: "255,165,0",
    L: "245,245,0",
    O: "0,240,0",
    S: "30, 100, 255",
    T: "75,0,130",
    Z: "148,0,211",
  },
  {
    name: "blackhole",
    background: blackholeBG,
    0: "0, 0, 0",
    I: "255, 255, 255",
    J: "0, 51, 102",
    L: "207, 171, 93",
    O: "102, 102, 102",
    S: "128, 50, 50",
    T: "255, 204, 0",
    Z: "153, 153, 153",
  },
  {
    name: "unicorn",
    background: unicornBG,
    0: "0, 0, 0",
    I: "100, 230, 255",
    J: "244, 100, 194",
    L: "255, 209, 220",
    O: "255, 102, 230",
    S: "255, 105, 180",
    T: "205, 55, 205",
    Z: "135, 206, 250",
  },
];
