import React from "react";
import {Header} from "./Header/Header";
import {MatrixContainer} from "./Matrix/Matrix";

export const App = () => (
  <div>
    <Header/>
    <div className="body">
      <MatrixContainer/>
    </div>
  </div>
);
