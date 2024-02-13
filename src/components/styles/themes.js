import React from "react";
import starsImg from "../../assets/img/bg.png";
import cloudImg from "../../assets/img/clouds.jpg";
import hellImg from "../../assets/img/hellscape.jpg";
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
    name: "monochrome-dark",
    background: cloudImg,
    0: "0, 0, 0",
    I: "211, 211, 211",
    J: "224, 224, 224",
    L: "229, 229, 229",
    O: "220, 220, 220",
    S: "238, 238, 238",
    T: "240, 240, 240",
    Z: "200, 200, 200",
  },
  {
    name: "hellscape",
    background: hellImg,
    0: "0, 0, 0",
    I: "102, 0, 0",
    J: "95,0,0",
    L: "128, 0, 0",
    O: "153, 0, 0",
    S: "179, 0, 0",
    T: "204, 0, 0",
    Z: "230,0,0",
  },
];
