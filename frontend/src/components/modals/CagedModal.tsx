import React from "react";
import useModalStore from "../../hooks/useModal";
import "./modal.scss";
import Toggle from "../toggle/Toggle";

type CagedModalProps = {};

const CagedModal: React.FC<CagedModalProps> = () => {
  const closeModal = useModalStore((state) => state.closeModal);
  const isModalOpen = useModalStore((state) => state.isModalOpen("cagedModal"));

  // Early return if the modal is not open
  if (!isModalOpen) {
    return null;
  }

  const shapes: string[] = [
    "C Shape",
    "A Shape",
    "G Shape",
    "E Shape",
    "D Shape",
  ];

  return (
    <div className="overlay">
      <div className="modal">
        <div className="title">
          <p>Caged</p>
          <button onClick={() => closeModal("cagedModal")} className="close-modal-btn">X</button>
        </div>
        <div className="description">
          <p>
            Choose a CAGED position to view that specific shape on the
            fretboard.
          </p>
        </div>
        {/* <div className="shapes">
        {shapes.map((shape) => (
          <button
            key={shape} // Ensure each button has a unique key
            // onClick={() => setSelectedShape(shape)} // Uncomment and implement this if needed
            aria-label={`Select ${shape}`} // Improve accessibility
          >
            {shape}
          </button>
        ))}
        </div> */}

        <Toggle shapes={shapes} />

        {/* <button onClick={() => closeModal('cagedModal')}>Close Modal</button> */}
      </div>
    </div>
  );
};

export default CagedModal;
