import React from "react";
import "./cagedControls.scss";
import useModalStore from "../../../hooks/useModal";

type CagedControlsProps = {
  setSelectedShape: (shape: string) => void;
};

const CagedControls: React.FC<CagedControlsProps> = ({ setSelectedShape }) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="caged-controls">
      <button onClick={() => openModal('cagedModal')}>Caged System</button>
    </div>
  );
};

export default CagedControls;