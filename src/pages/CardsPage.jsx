import React from "react";
import Card from "../components/Card";
import images from "../constants/images"; // Ensure you import the correct path
import NavBarScrollable from "../components/NavBarScrollable";

const CardsPage = () => {
  return (
    <NavBarScrollable>
      <div className="two-cards-container">
        {" "}
        <Card
          icon={images.fire}
          title="Fire"
          description="Fire element."
          progress={70}
        />
        <Card
          icon={images.water}
          title="Water"
          description="Water element."
          progress={40}
        />
        <Card
          icon={images.water}
          title="Water"
          description="Water element."
          progress={40}
        />
        <Card
          icon={images.water}
          title="Water"
          description="Water element."
          progress={40}
        />
        <Card
          icon={images.water}
          title="Water"
          description="Water element."
          progress={40}
        />
        <Card
          icon={images.water}
          title="Water"
          description="Water element."
          progress={40}
        />
        <Card
          icon={images.water}
          title="Water"
          description="Water element."
          progress={40}
        />
        <Card
          icon={images.ground}
          title="Earth"
          description="Earth element."
          progress={90}
        />
        <Card
          icon={images.ground}
          title="Earth"
          description="Earth element."
          progress={90}
        />
        <Card
          icon={images.ground}
          title="Earth"
          description="Earth element."
          progress={90}
        />
        <Card
          icon={images.ground}
          title="Earth"
          description="Earth element."
          progress={90}
        />
        <Card
          icon={images.ground}
          title="Earth"
          description="Earth element."
          progress={90}
        />
        <Card
          icon={images.ground}
          title="Earth"
          description="Earth element."
          progress={90}
        />
        <Card
          icon={images.ground}
          title="Earth"
          description="Earth element."
          progress={90}
        />
      </div>
    </NavBarScrollable>
  );
};

export default CardsPage;
