import React from "react";
import images from "../constants/images";
import { FullWidthCard } from "../components/FullWidthCard";
import NavBarScrollable from "../components/NavBarScrollable";

const MinePage = () => {
  const cardsData = [
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.fire, label: "Fire", progress: "0/10" },
    { icon: images.water, label: "Water", progress: "3/10" },
  ];
  const coins = 7.43e5;
  return (
    <NavBarScrollable>
      
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={
            index === 0
              ? "first-card card-container"
              : index === cardsData.length - 1
              ? "last-card card-container"
              : "card-container"
          }
        >
          {" "}
          <FullWidthCard
            icon={card.icon}
            label={card.label}
            progress={card.progress}
          />
        </div>
      ))}
    </NavBarScrollable>
  );
};

export default MinePage;
