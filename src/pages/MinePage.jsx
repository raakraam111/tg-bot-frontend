import React, { useState } from "react";
import images from "../constants/images";
import { FullWidthCard } from "../components/FullWidthCard";
import NavBarScrollable from "../components/NavBarScrollable";
import Toast from "../components/Toast"; // Import the Toast component
// import "../css/MinePage.css"; // Import relevant CSS

const MinePage = () => {
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: '', message: '' });
    }, 3000);
  };

  const handleCardClick = (card) => {
    showToast('info', `You clicked the ${card.label} card with progress ${card.progress}`);
  };

  const cardsData = [
    { icon: images.fire, label: "Fire", progress: "10/10" },
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

  return (
    <NavBarScrollable>
      <div className="mine-page-heading">
        Upgrade & Deploy Weapons
      </div>
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
          onClick={() => handleCardClick(card)} // Handle card click
        >
          <FullWidthCard
            icon={card.icon}
            label={card.label}
            progress={card.progress}
          />
        </div>
      ))}
      {toast.show && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast({ show: false, type: '', message: '' })}
        />
      )}
    </NavBarScrollable>
  );
};

export default MinePage;
