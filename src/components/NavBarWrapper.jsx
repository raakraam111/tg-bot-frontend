import React from "react";

import NavigationBar from "./NavigationBar";
import { menuItems } from "../constants/constants";

const NavBarWrapper = ({ children }) => {
  return (
    <div className="container   13456891112131415 2710">
      <div className="content">
        <div className="game-container">
          {children}
          <div className="navbar">
            <NavigationBar items={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarWrapper;