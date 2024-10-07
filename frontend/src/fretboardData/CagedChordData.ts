export type ChordName =
  | "A Major (C Shape)"
  | "A Major (A Shape)"
  | "A Major (G Shape)"
  | "A Major (E Shape)"
  | "A Major (D Shape)"
  | "B Major (A Shape)"
  | "B Major (C Shape)"
  | "B Major (D Shape)"
  | "B Major (E Shape)"
  | "B Major (G Shape)";

export const ChordData: Record<
  ChordName,
  {
    note: string;
    string: number;
    fret: number;
    interval: string;
    openNote?: boolean;
  }[]
> = {
  "A Major (C Shape)": [
    { note: "C#", string: 0, fret: 9, interval: "major 3rd" },
    { note: "A", string: 1, fret: 10, interval: "root" },
    { note: "E", string: 2, fret: 9, interval: "5th" },
    { note: "C#", string: 3, fret: 11, interval: "major 3rd" },
    { note: "A", string: 4, fret: 12, interval: "root" },
  ],
  "A Major (A Shape)": [
    { note: "A", string: 2, fret: 2, interval: "root" },
    { note: "E", string: 3, fret: 2, interval: "5th" },
    { note: "C#", string: 1, fret: 2, interval: "major 3rd" },
    { note: "E", string: 0, fret: 0, interval: "5th", openNote: true },
    { note: "A", string: 4, fret: 0, interval: "root", openNote: true },
    { note: "E", string: 5, fret: 0, interval: "5th", openNote: true },
  ],
  "A Major (G Shape)": [
    { note: "A", string: 2, fret: 2, interval: "root" },
    { note: "E", string: 3, fret: 2, interval: "5th" },
    { note: "C#", string: 1, fret: 2, interval: "major 3rd" },
    { note: "A", string: 5, fret: 5, interval: "root" },
    { note: "D", string: 4, fret: 4, interval: "perfect 4th" }, // Correction here
    { note: "A", string: 0, fret: 5, interval: "root" },
  ],
  "A Major (E Shape)": [
    { note: "A", string: 5, fret: 5, interval: "root" },
    { note: "E", string: 4, fret: 7, interval: "5th" },
    { note: "A", string: 3, fret: 7, interval: "root" },
    { note: "C#", string: 2, fret: 6, interval: "major 3rd" },
    { note: "E", string: 1, fret: 5, interval: "5th" },
    { note: "A", string: 0, fret: 5, interval: "root" },
  ],
  "A Major (D Shape)": [
    { note: "A", string: 3, fret: 7, interval: "root" },
    { note: "E", string: 2, fret: 9, interval: "5th" },
    { note: "A", string: 1, fret: 10, interval: "root" },
    { note: "C#", string: 0, fret: 9, interval: "major 3rd" },
  ],
  "B Major (C Shape)": [
    { note: "F#", string: 0, fret: 14, interval: "5th" },
    { note: "D#", string: 1, fret: 11, interval: "major 3rd" },
    { note: "B", string: 2, fret: 12, interval: "root" },
    { note: "F#", string: 3, fret: 11, interval: "5th" },
    { note: "D#", string: 4, fret: 13, interval: "major 3rd" },
    { note: "B", string: 5, fret: 14, interval: "root" },
  ],
  "B Major (A Shape)": [
    { note: "F#", string: 5, fret: 2, interval: "perfect 5th" },
    { note: "B", string: 4, fret: 2, interval: "root" },
    { note: "F#", string: 3, fret: 4, interval: "perfect 5th" },
    { note: "B", string: 2, fret: 4, interval: "root" },
    { note: "D#", string: 1, fret: 4, interval: "major 3rd" },
    { note: "F#", string: 0, fret: 2, interval: "perfect 5th" },
  ],
  "B Major (G Shape)": [
    { note: "B", string: 5, fret: 7, interval: "root" },
    { note: "F#", string: 4, fret: 4, interval: "perfect 5th" },
    { note: "B", string: 3, fret: 4, interval: "root" },
    { note: "D#", string: 2, fret: 4, interval: "major 3rd" },
    { note: "B", string: 1, fret: 7, interval: "root" },
    { note: "F#", string: 0, fret: 7, interval: "perfect 5th" },
  ],
  "B Major (E Shape)": [
    { note: "B", string: 5, fret: 7, interval: "root" },
    { note: "F#", string: 4, fret: 9, interval: "5th" },
    { note: "B", string: 3, fret: 9, interval: "root" },
    { note: "D#", string: 2, fret: 8, interval: "major 3rd" },
    { note: "F#", string: 1, fret: 7, interval: "5th" },
    { note: "B", string: 0, fret: 7, interval: "root" },
  ],
  "B Major (D Shape)": [
    { note: "B", string: 3, fret: 9, interval: "root" },
    { note: "F#", string: 2, fret: 11, interval: "5th" },
    { note: "B", string: 1, fret: 12, interval: "root" },
    { note: "D#", string: 0, fret: 11, interval: "major 3rd" },
  ],
};
