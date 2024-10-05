import React from "react";

type NoteButtonProps = {
  note: string;
  isActive: boolean;
  isOpenString: boolean;
  onClick: () => void;
};

const NoteButton: React.FC<NoteButtonProps> = ({ note, isActive, isOpenString, onClick }) => {
  const activeClass = isActive ? "active-note" : "inactive-note";
  const openClass = isOpenString ? "open-string" : "";

  return (
    <button
      type="button"
      className={`note-button ${activeClass} ${openClass}`}
      onClick={onClick}
    >
      {note}
    </button>
  );
};

export default NoteButton;