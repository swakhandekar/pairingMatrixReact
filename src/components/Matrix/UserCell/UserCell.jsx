import React from "react";
import "./userCell.scss"

export const UserCell = ({name}) => (
  <div className={`user-cell`}>
    {name}
  </div>
);
