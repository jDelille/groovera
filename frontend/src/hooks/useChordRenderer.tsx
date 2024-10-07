import { useState, useEffect } from "react";
import { ChordData, ChordName } from "../fretboardData/CagedChordData";

const useChordRenderer = (chordName: ChordName) => {
  const [chordNotes, setChordNotes] = useState<
    {
      note: string;
      string: number;
      fret: number;
      openNote?: boolean;
      interval: string;
    }[]
  >([]);

  useEffect(() => {
    if (ChordData[chordName]) {
      setChordNotes(ChordData[chordName] || []);
    } else {
      console.warn(`Chord "${chordName}" not found in ChordData.`);
    }
  }, [chordName]);

  const renderChord = () => {
    return chordNotes.map(({ note, string, fret }) => (
      <div
        key={`${string}-${fret}`}
        className={`fretboard-note string-${string} fret-${fret}`}
      >
        <button className="note-button">{note}</button>
      </div>
    ));
  };

  return { chordNotes, renderChord };
};

export default useChordRenderer;
