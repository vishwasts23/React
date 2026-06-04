import React, { useContext } from "react";
import { AppContext } from "../App";
import UserDetails from "./UserDetails";

function ProfileSection() {
  const { company } = useContext(AppContext);

  return (
    <div className="context-card">
      <h2>Employee Information</h2>

      <p>
        <strong>Company:</strong> {company}
      </p>

      <UserDetails />
    </div>
  );
}

export default ProfileSection;