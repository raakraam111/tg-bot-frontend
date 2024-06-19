import React from "react";

import NavigationBar from "./NavigationBar";
import { menuItems } from "../constants/constants";
import "../css/NavBar.css";

const NavBarScrollable = ({ children }) => {
  return (  
    <div className="container scrollable height-100">
      <div className="content scrollable height-100 scroll-bg">
        <div className="game-container-scrollable">
          {children}
            <NavigationBar items={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default NavBarScrollable;
