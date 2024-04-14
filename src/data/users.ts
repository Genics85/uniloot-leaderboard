import BLUE_DIAMOND from "../assets/levels/BLUE_DIAMOND.svg";
import WHITE_DIAMOND from "../assets/levels/WHITE_DIAMOND.svg";
import BROWN_DIAMOND from "../assets/levels/BROWN_DIAMOND.svg";
import BROWN_DOLPHIN from "../assets/levels/BROWN_DOLPHIN.svg";

type User = {
  name: string;
  level: string;
  points: number;
};

export const userData: User[] = [
  {
    name: "Andy Dosty",
    level: WHITE_DIAMOND,
    points: 60000,
  },
  {
    name: "Mannesah ",
    level: BROWN_DIAMOND,
    points: 57000,
  },
  {
    name: "Eugene ",
    level: BLUE_DIAMOND,
    points: 54000,
  },
  {
    name: "FM100 ",
    level: BROWN_DOLPHIN,
    points: 52000,
  },
];
