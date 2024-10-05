import FretboardConstants from "../constants/@FretboardConstants";

export const useNoteConverter = (isFlat: boolean) => {
  const notes = isFlat ? FretboardConstants.notesFlat : FretboardConstants.notesSharp;

  const convertNoteName = (note: string) => {
    if (note.includes('bb')) {
      const noteIndex = (notes.indexOf(note.charAt(0)) - 1 + notes.length) % notes.length;
      return notes[noteIndex];
    }
    return note;
  };

  return convertNoteName;
};