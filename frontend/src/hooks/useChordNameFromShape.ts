import { ChordName } from "../fretboardData/CagedChordData";

// Accepts a key and a shape, and returns the appropriate chord name.
export const getChordNameFromShape = (key: string, shape: string, isMinor: boolean = false): ChordName => {
  const chordQuality = isMinor ? "Minor" : "Major";
  const chordBase = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(); // Capitalize the first letter of the key

  switch (shape) {
    case "C Shape":
      return `${chordBase} ${chordQuality} (C Shape)` as ChordName;
    case "A Shape":
      return `${chordBase} ${chordQuality} (A Shape)` as ChordName;
    case "G Shape":
      return `${chordBase} ${chordQuality} (G Shape)` as ChordName;
    case "E Shape":
      return `${chordBase} ${chordQuality} (E Shape)` as ChordName;
    case "D Shape":
      return `${chordBase} ${chordQuality} (D Shape)` as ChordName;
    default:
      throw new Error("Invalid shape");
  }
};