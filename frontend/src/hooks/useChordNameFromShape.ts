import { ChordName } from "../fretboardData/ChordData";

export const getChordNameFromShape = (shape: string): ChordName => {
  switch (shape) {
    case "C Shape":
      return "A Major (C Shape)";
    case "A Shape":
      return "A Major (A Shape)";
    case "G Shape":
      return "A Major (G Shape)";
    case "E Shape":
      return "A Major (E Shape)";
    case "D Shape":
      return "A Major (D Shape)";
    default:
      throw new Error("Invalid shape");
  }
};
