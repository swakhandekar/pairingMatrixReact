import React from "react";
import {Header} from "./Header/Header";
import {Matrix} from "./Matrix/Matrix";

export const App = () => (
  <div>
    <Header/>
    <div className="body">
      <Matrix length={3}/>
    </div>
  </div>
);
