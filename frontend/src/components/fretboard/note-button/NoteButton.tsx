import React from "react";

type NoteButtonProps = {
  note: string;
  isActive: boolean;
  isOpenString: boolean;
  onClick: () => void;
  isRootNote: boolean;
};

const NoteButton: React.FC<NoteButtonProps> = ({ note, isActive, isOpenString, onClick, isRootNote }) => {
  const activeClass = isActive ? "active-note" : "inactive-note";
  const openClass = isOpenString ? "open-string" : "";
  const rootClass = isRootNote ? "root-note" : "";

  return (
    <button
      type="button"
      className={`note-button ${activeClass} ${openClass} ${rootClass}`}
      onClick={onClick}
    >
      {note}
    </button>
  );
};

export default NoteButton;