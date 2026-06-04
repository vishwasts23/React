import React, { useContext } from "react";
import { AppContext } from "../App";
import TrainerInfo from "./TrainerInfo";

function UserDetails() {
  const { theme } = useContext(AppContext);

  return (
    <div className="nested-box">
      <p>
        <strong>Current Theme:</strong> {theme}
      </p>

      <TrainerInfo />
    </div>
  );
}

export default UserDetails;