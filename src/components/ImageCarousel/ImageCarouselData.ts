import { StaticImageData } from "next/image";
import football from "../../assets/Football.jpg";
import iceHockey from "../../assets/Ice_Hockey.jpg";
import tennis from "../../assets/Tennis.jpg";

const SLIDES = [
  {
    id: 0,
    src: football,
    alt: "Football",
  },
  {
    id: 1,
    src: iceHockey,
    alt: "IceHockey",
  },
  {
    id: 2,
    src: tennis,
    alt: "Tennis",
  },
];

export default SLIDES;
