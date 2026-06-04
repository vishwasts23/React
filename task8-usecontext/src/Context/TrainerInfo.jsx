import React, { useContext } from "react";
import { AppContext } from "../App";

function TrainerInfo() {
  const { trainer } = useContext(AppContext);

  return (
    <div className="nested-box">
      <p>
        <strong>Trainer:</strong> {trainer}
      </p>
    </div>
  );
}

export default TrainerInfo;