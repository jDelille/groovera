import React, { useEffect, useState } from "react";
import FretNumbers from "./FretNumbers";
import FretboardConstants from "../../constants/@FretboardConstants";
import useChordRenderer from "../../hooks/useChordRenderer";
import NoteButton from "./note-button/NoteButton";
import { useNoteConverter } from "../../hooks/useNoteConverter";
import { getChordNameFromShape } from "../../hooks/useChordNameFromShape";
import FretboardControls from "./fretboard-controls/FretboardControls";
import "./fretboard.scss";

type FretboardProps = {
    selectedShape: string;
    active: boolean;
    setActiveFretboard: (index: number) => void;
    index?: number;
    selectedKey: string;

};
const Fretboard: React.FC<FretboardProps> = ({ selectedKey, selectedShape, active, setActiveFretboard, index}) => {
  const [isFlat, setIsFlat] = useState(false);

  let [selectedChord, setSelectedChord] =
    useState<any>(`A Minor (${selectedShape})`);

  const { tunings } = FretboardConstants;
  const notes = isFlat
    ? FretboardConstants.notesFlat
    : FretboardConstants.notesSharp;
  const numberOfFrets = 24;

  const { chordNotes } = useChordRenderer(selectedChord);

  const convertNoteName = useNoteConverter(isFlat);

  useEffect(() => {
    if (!selectedShape) {
      console.warn("Shape not selected");
      return;
    }
    try {
      setSelectedChord(getChordNameFromShape(selectedKey, selectedShape));
    } catch (error) {
      console.error("Error setting chord:", error);
    }
  }, [selectedShape]);

  return (
    <div className="fretboard-container">
      <FretNumbers totalFrets={numberOfFrets} startFret={0} endFret={10} />
      
      <div className={active ? "active-fretboard" : "fretboard"} onClick={() => setActiveFretboard(index as number)}>
        {Array.from({ length: 6 }, (_, string) => {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const frets = Array.from({ length: numberOfFrets }, (_, fret) => {
            const noteIndex = (fret + tunings[0].tuning[string]) % 12;
            const note = convertNoteName(notes[noteIndex]);

            const chordNote = chordNotes.find(
              (n) => n.string === string && n.fret === fret
            );
            const isActiveNote = !!chordNote;
            const isOpenString = chordNote?.openNote || false;
            const isRootNote = chordNote?.interval === "root";

            return (
              <div className="fret">
                <div className="note-background">
                  <NoteButton
                    note={chordNote ? chordNote.note : notes[noteIndex]}
                    isActive={isActiveNote}
                    isOpenString={isOpenString}
                    isRootNote={isRootNote}
                    onClick={() => console.log("Note clicked:", note)}
                  />
                </div>
              </div>
            );
          });
          return (
            <div className="string" key={`string-${string}`}>
              {frets}
            </div>
          );
        })}
      </div>
      <FretboardControls />
    </div>
  );
};

export default Fretboard;
