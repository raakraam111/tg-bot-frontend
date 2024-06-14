import React, { useState, useRef, useEffect } from "react";
import images from "../constants/images";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { changeUserData } from "../store/slices/userSlice";
import { defaultUserData } from "../constants/constants";
import DataDisplay from "./DataDisplay";

export default function Tapper() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(defaultUserData);
  const [userLevel] = useState(1);
  const [coins, setCoins] = useState(user.coins);
  const [userEnergy, setUserEnergy] = useState(user.userEnergy); // User starts with full energy
  const [userMaxEnergy] = useState(user.userMaxEnergy); // User starts with full energy
  const [monsterMaxEnergy] = useState(user.monsterEnergy); // User starts with full energy
  const [monsterEnergy, setMonsterEnergy] = useState(user.monsterEnergy); // Monster also starts with full energy
  const [animations, setAnimations] = useState([]);
  const [isAutoTapping, setIsAutoTapping] = useState(false);
  const [isAutoTapSubscribed, setIsAutoTapSubscribed] = useState(
    user.isAutoTapSubscribed
  );
  const monsterRef = useRef(null);
  // const [tapCount, setTapCount] = useState(0);
  const [energyCost, setEnergyCost] = useState(user.energyCost); // Cost of each tap to user energy
  const [autoTapEnergyCost, setAutoTapEnergyCost] = useState(
    user.autoTapEnergyCost
  ); // Cost of each auto tap to user energy
  const [coinAnimations, setCoinAnimations] = useState([]);

  useEffect(() => {
    let interval;
    if (!animations.length && userEnergy < userMaxEnergy) {
      interval = setInterval(() => {
        setUserEnergy((prevEnergy) => {
          if (prevEnergy < userMaxEnergy) {
            return Math.min(prevEnergy + energyCost, userMaxEnergy); // Increment energy
          } else {
            clearInterval(interval); // Stop interval when max energy is reached
            return userMaxEnergy; // Ensure energy does not exceed max
          }
        });
      }, 300); // Refill energy every 1 second
    }

    return () => clearInterval(interval); // Clean up interval
  }, [animations, userEnergy, userMaxEnergy]);

  const handleTap = (event) => {
    if (isAutoTapping) return; // Prevent manual taps during auto tapping
    const { clientX, clientY } = event; // Get tap coordinates

    window.requestAnimationFrame(() => {
      
      if (monsterRef.current) {
        monsterRef.current.style.transform = `scale(1.05)`;
        setTimeout(() => {
          monsterRef.current.style.transform = "";
        }, 150); // Quick reset to normal after slight scale up
      }
      
      if (userEnergy >= energyCost) {
        setUserEnergy((prev) => prev - energyCost);
        setMonsterEnergy((prev) => Math.max(prev - energyCost, 0));
        //   setTapCount(prev => prev + 1);  // Increment tap count

        for (let i = 0; i < energyCost; i++) {
          setTimeout(() => {
            setCoins((prev) => prev + 1);
          }, i * 100); // Adding 1 coin every 100 ms for a total of 5 coins
        }

        let newAnimation;
        // // Create animations from 5 different parts of the monster

        // newAnimation = {
        //   id: uuidv4(),
        //   x: monsterRef.current.offsetLeft + monsterRef.current.clientWidth / 2,
        //   y: monsterRef.current.offsetTop + monsterRef.current.clientHeight / 2,
        // };
        if (!monsterRef.current) return; // Guard clause if the ref is not attached

        // Get the bounding rectangle of the element
        const rect = monsterRef.current.getBoundingClientRect();

        // Calculate tap coordinates relative to the element
        const x = event.clientX - rect.left; // x position within the element.
        const y = event.clientY - 80; // y position within the element.

        newAnimation = {
          id: uuidv4(),
          x: x, // Adjusted for the center of a small icon if needed
          y: y,
        };

        setAnimations((current) => [...current, newAnimation]);

        setTimeout(() => {
          setAnimations((current) =>
            current.filter((anim) => anim.id !== newAnimation.id)
          );
        }, 3000);
      }
    });
  };

  const handleAutoTap = () => {
    if (userEnergy >= autoTapEnergyCost) {
      setUserEnergy((prev) => prev - autoTapEnergyCost);
      // setMonsterEnergy((prev) => Math.max(prev - autoTapEnergyCost, 0));
      // setTapCount((prev) => prev + 1); // Increment tap count

      for (let i = 0; i < autoTapEnergyCost; i++) {
        setTimeout(() => {
          setCoins((prev) => prev + 5);
        }, i * 100); // Adding 1 coin every 100 ms for a total of 5 coins
      }
      
      if (monsterRef.current) {
        monsterRef.current.style.transform = `scale(1.05)`;
        setTimeout(() => {
          monsterRef.current.style.transform = "";
        }, 150); // Quick reset to normal after slight scale up
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

    const interval2 = setInterval(() => {
      // Your existing logic here
      // Additionally, trigger new coin animations
      let opacity = Math.random(); // Random opacity for each coin
      let newCoin = {
        id: uuidv4(),
        style: {
          animationDuration: `${2 + Math.random()}s`, // Random duration between 2 and 3 seconds
          opacity: opacity,
          bottom: `${Math.random() * 50 - Math.random() * 20}%`, // Random bottom from 0% to 20%
          right: `${Math.random() * 100}%`, // Random bottom from 0% to 20%
          left: `${Math.random() * 100}%`, // Random bottom from 0% to 20%
        },
      };
      setCoinAnimations((prev) => [...prev, newCoin]);
    }, 31);

    setTimeout(() => {
      clearInterval(interval2);
      setIsAutoTapping(false);
      setCoinAnimations([]); // Clear coin animations
    }, 11000); // Duration of auto tapping

    const interval = setInterval(handleAutoTap, 100); // Simulate tap every 100ms to achieve 2000 taps in 45 seconds

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

  const dataItems = [
    { description: 'Earn per tap', value: "+"+ energyCost },
    { description: 'Coins to Levelup', value: '100K' },
    { description: 'ROI per hour', value: '23.3K' },
  ];

  return (
     <>
      {/* <button onClick={handleSetToDefault} className="text-white ">
        Set to Default User
      </button> */}
      {/* <DataDisplay items={dataItems} /> */}
      {coinAnimations.map((coin) => (
        <div key={coin.id} className="coin-flow" style={coin.style} />
      ))}


      <div className="flex text-3xl score ">
        <span className="pr-1 ">
          <img src={images.usd1} width="50" height="50" />
        </span>
        {coins && coins.toLocaleString()}
      </div>
      
      {/* <div className="flex justify-between items-center mt-5 mb-3">
      <div className="text-white text-lg">
        User Level: {userLevel}
      </div>
      <div className="text-white text-lg">
        Monster Energy: {monsterEnergy}
      </div>
    </div> */}

    <div className="progress-bar-background">
      <div className="progress-bar" style={{ width: `33%` }}></div>
    </div>
      <img
        src={images.m1}
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
      <div className="energy-status text-white  z-1000">
        <div className="left-icon">
          <img src={images.thunder} alt="Thunder" width="30" height="30" />
          {userEnergy}/{userMaxEnergy}
        </div>
        <div
          className="right-icon"
          onClick={activateAutoTapper}
          disabled={isAutoTapping}
        >
          <img
            src={images.speed}
            alt="Boost"
            width="30"
            height="30"
            className="mr-1"
          />{" "}
          {/* Assuming there's a Boost icon */}
          {isAutoTapping ? "Tapping" : "Swift"}
        </div>
      </div>

      {/*   <div className="energy-status font-bold text-black py-2">
        Monster Energy: {monsterEnergy}
      </div> */}

    {/* <div className="navbar">
              <NavigationBar items={menuItems} />
    </div>
    </div> */}
    </>
  );
}
