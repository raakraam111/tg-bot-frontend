
import React, { useState, useRef, useEffect } from "react";
import images from "../constants/images";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { changeUserData } from "../store/slices/userSlice";
import { defaultUserData } from "../constants/constants";

export default function Tapper() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(defaultUserData);
  const [coins, setCoins] = useState(user.coins);
  const [userEnergy, setUserEnergy] = useState(user.userEnergy); // User starts with full energy
  const [userMaxEnergy] = useState(user.userMaxEnergy); // User starts with full energy
  const [monsterMaxEnergy] = useState(user.monsterEnergy); // User starts with full energy
  const [monsterEnergy, setMonsterEnergy] = useState(user.monsterEnergy); // Monster also starts with full energy
  const [animations, setAnimations] = useState([]);
  const [isAutoTapping, setIsAutoTapping] = useState(false);
  const [isAutoTapSubscribed, setIsAutoTapSubscribed] = useState(user.isAutoTapSubscribed);
  const monsterRef = useRef(null);
  const [tapCount, setTapCount] = useState(0);
  const [energyCost, setEnergyCost] = useState(user.energyCost); // Cost of each tap to user energy
  const [autoTapEnergyCost, setAutoTapEnergyCost] = useState(
    userEnergy / 100
  ); // Cost of each tap to user energy

  useEffect(() => {
    let interval;
    if (!animations.length && userEnergy < userMaxEnergy) {
        interval = setInterval(() => {
            setUserEnergy(prevEnergy => {
                if (prevEnergy < userMaxEnergy) {
                    return Math.min(prevEnergy + energyCost, userMaxEnergy); // Increment energy
                } else {
                    clearInterval(interval); // Stop interval when max energy is reached
                    return userMaxEnergy; // Ensure energy does not exceed max
                }
            });
        }, 300 ); // Refill energy every 1 second
    }

    return () => clearInterval(interval); // Clean up interval
}, [animations, userEnergy, userMaxEnergy]);

  const handleTap = () => {
    if (isAutoTapping) return; // Prevent manual taps during auto tapping
    if (userEnergy >= energyCost) {
      setUserEnergy((prev) => prev - energyCost);
      setMonsterEnergy((prev) => Math.max(prev - energyCost, 0));
      //   setTapCount(prev => prev + 1);  // Increment tap count
      if (isAutoTapping) {
        setTimeout(() => {
          setCoins((prev) => prev + energyCost);
        }, i * 100);
      } else {
        for (let i = 0; i < energyCost; i++) {
          setTimeout(() => {
            setCoins((prev) => prev + 1);
          }, i * 100); // Adding 1 coin every 100 ms for a total of 5 coins
        }
      }
      let newAnimation;
      // Create animations from 5 different parts of the monster

      newAnimation = {
        id: uuidv4(),
        x: monsterRef.current.offsetLeft + monsterRef.current.clientWidth / 2,
        y: monsterRef.current.offsetTop + monsterRef.current.clientHeight / 2,
      };
      setAnimations((current) => [...current, newAnimation]);

      setTimeout(() => {
        setAnimations((current) =>
          current.filter((anim) => anim.id !== newAnimation.id)
        );
      }, 1000);
    }
  };

  const handleAutoTap = () => {
    if (isAutoTapping) return; // Prevent manual taps during auto tapping
    if (userEnergy >= autoTapEnergyCost) {
      setUserEnergy((prev) => prev - autoTapEnergyCost);
      setMonsterEnergy((prev) => Math.max(prev - autoTapEnergyCost, 0));
      setTapCount((prev) => prev + 1); // Increment tap count
      for (let i = 0; i < autoTapEnergyCost; i++) {
        setTimeout(() => {
          setCoins((prev) => prev + 5);
        }, i * 100); // Adding 1 coin every 100 ms for a total of 5 coins
      }

      const newAnimation = {
        id: uuidv4(),
        x: monsterRef.current.offsetLeft + monsterRef.current.clientWidth / 2,
        y: monsterRef.current.offsetTop + monsterRef.current.clientHeight / 2,
      };

      setAnimations((current) => [...current, newAnimation]);

      setTimeout(() => {
        setAnimations((current) =>
          current.filter((anim) => anim.id !== newAnimation.id)
        );
      }, 1000);
    }
  };

  const activateAutoTapper = () => {
    if (userEnergy < userMaxEnergy) {
      alert("User energy is not full");
      return;
    }
    setIsAutoTapping(true);

    const interval = setInterval(handleAutoTap, 100); // Simulate tap every 22.5ms to achieve 2000 taps in 45 seconds
    setTimeout(() => {
      clearInterval(interval);
      setIsAutoTapping(false);
      //   setUserEnergy(0);  // Drain all energy after auto tapping
    }, 10000); // Auto tap for 45 seconds
  };

  const handleSetToDefault = () => {
    console.log("tapped to set to default");
    dispatch(changeUserData(defaultUserData));
    setUserEnergy(defaultUserData.userEnergy);
  };

  return (
    <div className="game-container">
      {/* <button onClick={handleSetToDefault} className="text-white ">
        Set to Default User
      </button> */}
      <div className="flex text-3xl text-white score ">
        <span className="pr-1 z-1000">
          <img src={images.goldcoin} width="50" height="50" />
        </span>
        {coins && coins.toLocaleString()}
      </div>
      <img
        src={images.c1}
        alt="Coin"
        className="monster-icon"
        onClick={handleTap}
        ref={monsterRef}
      />
      {/* <button
        onClick={activateAutoTapper}
        disabled={isAutoTapping}
        className="styled-button mb-10 "
      >
        {isAutoTapping ? "..." : "Auto"}
      </button> */}
      {animations.map((anim) => (
        <div
          key={anim.id}
          className="coin-animation"
          style={{ position: "fixed", left: anim.x, top: anim.y }}
        >
          {isAutoTapping ? "+" + autoTapEnergyCost : "+" + energyCost}
        </div>
      ))}
      {/* <div className="coin-count font-bold  text-white py-2">
        Coins: {coins.toLocaleString()}
      </div> */}
     <div className="energy-status text-white">
        <div className="left-icon">
          <img src={images.thunder} alt="Thunder" width="30" height="30" />
          {userEnergy}/{userMaxEnergy}
          </div>
        <div className="right-icon"
              onClick={activateAutoTapper}
              disabled={isAutoTapping}
        >
          <img src={images.rocket} alt="Boost" width="30" height="30" className="mr-3" /> {/* Assuming there's a Boost icon */}
          {isAutoTapping? "Tapping": "Auto tap"}
        </div>
      </div>

     {/*   <div className="energy-status font-bold text-black py-2">
        Monster Energy: {monsterEnergy}
      </div> */}
      
    </div>
  );
}
