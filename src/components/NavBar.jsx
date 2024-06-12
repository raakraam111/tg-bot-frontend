import React from "react";

import NavigationBar from "./NavigationBar";
import { menuItems } from "../constants/constants";

const NavBar = ({ children }) => {
  return (
    <div className="container">
      <div className="content non-scrollable top-7percent height-93vh round-edges">
        <div className="game-container ">
          {children}
          <div className="navbar">
            <NavigationBar items={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
