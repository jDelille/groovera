export type ChordName =
  | "A Major (C Shape)"
  | "A Major (A Shape)"
  | "A Major (G Shape)"
  | "A Major (E Shape)"
  | "A Major (D Shape)";

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
    { note: "C#", string: 0, fret: 9, interval: "5th" },
    { note: "A", string: 1, fret: 10, interval: "major 3rd" },
    { note: "E", string: 2, fret: 9, interval: "5th" },
    { note: "C#", string: 3, fret: 11, interval: "root" },
    { note: "A", string: 4, fret: 12, interval: "major 3rd" },
  ],
  "A Major (A Shape)": [
    { note: "A", string: 2, fret: 2, interval: "root" },
    { note: "E", string: 3, fret: 2, interval: "5th" },
    { note: "C#", string: 1, fret: 2, interval: "major 3rd" },
    { note: "E", string: 0, fret: 0, interval: "5th", openNote: true },
    { note: "A", string: 4, fret: 0, interval: "root", openNote: true },
    { note: "E", string: 5, fret: 0, interval: "major 3rd", openNote: true },
  ],
  "A Major (G Shape)": [
    { note: "A", string: 2, fret: 2, interval: "root" },
    { note: "E", string: 3, fret: 2, interval: "5th" },
    { note: "C#", string: 1, fret: 2, interval: "major 3rd" },
    { note: "A", string: 5, fret: 5, interval: "root" },
    { note: "D", string: 4, fret: 4, interval: "5th" },
    { note: "A", string: 0, fret: 5, interval: "5th" },
  ],
  "A Major (E Shape)": [
    { note: "A", string: 5, fret: 5, interval: "root" },
    { note: "E", string: 4, fret: 7, interval: "5th" },
    { note: "A", string: 3, fret: 7, interval: "5th" },
    { note: "C#", string: 2, fret: 6, interval: "5th" },
    { note: "E", string: 1, fret: 5, interval: "5th" },
    { note: "A", string: 0, fret: 5, interval: "5th" },
  ],
  "A Major (D Shape)": [
    { note: "A", string: 3, fret: 7, interval: "root" },
    { note: "E", string: 2, fret: 9, interval: "root" },
    { note: "A", string: 1, fret: 10, interval: "root" },
    { note: "C#", string: 0, fret: 9, interval: "root" },
  ],
};
