import React from "react";
import "./userCell.scss"
import {connect} from "react-redux";

export const UserCell = ({name}) => (
  <div className={`user-cell`}>
    {name}
  </div>
);

const mapStateToProps = (state, props) => ({
  name: state.matrix.users[props.index].Name
});

export const UserCellContainer = connect(mapStateToProps, {})(UserCell);
