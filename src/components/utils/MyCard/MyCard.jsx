import React from "react";
import "./myCard.scss";

export class MyCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const {children} = this.props;
    return (
      <div className="my-card effect7" style={{width:"75px", height: "75px"}}>
        <div className="my-card-body">
          {children}
        </div>
      </div>
    )
  }
}

