import React from "react";

import NavigationBar from "./NavigationBar";
import { menuItems } from "../constants/constants";
import { FaUser, FaTrophy } from 'react-icons/fa'; // Import icons from react-icons
import images from "../constants/images";
import "../css/NavBar.css";
import {TonConnectButton} from "@tonconnect/ui-react";

const NavBar = ({ children }) => {
  return (
    <div className="container">
      <div className="header">
        <div className="user-info">
      <TonConnectButton />

           {/* <img src={images.assets_logo} width={40}/> 
          <span className="text-white pl-1 ">{"Red Bull"}</span> */}
        </div>
        <div className="level-info">
        <img src={images.coins_gold_coin} width={40}/> 
          <span className="text-white pl-1 ">{"VIP 1"}</span>
        </div>
      </div>
      <div className="content non-scrollable top-2percent height-93vh round-edges">
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
