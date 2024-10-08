export const FretboardConstants = Object.freeze({
  minimumFret: 2,
  maximumFret: 25,
  notesFlat: ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"],
  notesSharp: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
  tuning: [
    [7, 14, 10, 5, 12, 7],
    [6, 13, 9, 4, 11, 6],
    [7, 2, 11, 7, 2, 7],
    [7, 3, 10, 3, 10, 3],
    [5, 14, 10, 5, 10, 5],
    [5, 12, 9, 5, 12, 5],
    [7, 14, 10, 5, 12, 5],
    [2, 5, 9, 12, 16, 19],
    [1, 5, 8, 12, 15, 19],
    [7, 10, 7, 7, 10, 7],
    [2, 5, 2, 5, 2, 5],
    [5, 8, 5, 4, 3, 5],
    [7, 10, 7, 10, 7, 10],
    [0, 0, 0, 7, 7, 0],
  ],
  tuningNames: [
    "Standard",
    "Half-Step Down",
    "Open G",
    "DADGAD",
    "Drop C",
    "Double Drop D",
    "Open D Minor",
    "Drop D",
    "Open C",
    "All Fourths",
    "New Standard",
    "Dropped A",
    "Open E",
    "Open D",
  ],
  tunings: [
    {
      name: "Standard",
      notes: ["e", "a", "d", "g", "b", "e"],
      tuning: [7, 14, 10, 5, 12, 7],
    },
    {
      name: "Half-Step Down",
      notes: ["eb", "ab", "db", "gb", "bb", "eb"],
      tuning: [6, 13, 9, 4, 11, 6],
    },
    {
      name: "DADGAD",
      notes: ["d", "a", "d", "g", "a", "d"],
      tuning: [5, 12, 10, 5, 12, 5],
    },
    {
      name: "Open G",
      notes: ["d", "g", "d", "g", "b", "d"],
      tuning: [5, 14, 10, 5, 10, 5],
    },
    {
      name: "Drop C",
      notes: ["c", "g", "c", "f", "a", "d"],
      tuning: [5, 12, 8, 3, 10, 3],
    },
    {
      name: "Drop D",
      notes: ["d", "a", "d", "g", "b", "e"],
      tuning: [5, 10, 7, 3, 12, 5],
    },
    {
      name: "Open C",
      notes: ["c", "g", "c", "g", "c", "e"],
      tuning: [8, 3, 8, 3, 8, 12],
    },
    {
      name: "All Fourths",
      notes: ["e", "a", "d", "g", "c", "f"],
      tuning: [7, 12, 7, 2, 9, 4],
    },
    {
      name: "New Standard",
      notes: ["c", "f", "a#", "d#", "g", "c"],
      tuning: [8, 13, 10, 3, 8, 1],
    },
  ],
});


export default FretboardConstants;