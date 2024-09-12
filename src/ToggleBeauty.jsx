import React, { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
const ToggleBeauty = ({ isSelected }) => {
  const [selected, setSelected] = useState(isSelected);

  return (
    <div className="bg-white h-full w-full cursor-pointer flex items-center justify-center m-10">
      <div
        className="h-15 w-20 p-1 shadow-lg rounded-full border"
        onClick={() => setSelected(!selected)}
      >
        {selected ? (
          <div className="flex justify-start">
            <CancelIcon color="disabled" />
          </div>
        ) : (
          <div className="flex justify-end">
            <CheckCircleIcon color="success" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleBeauty;
