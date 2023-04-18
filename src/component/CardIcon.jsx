import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const CardIcon = ({ card }) => {
  return (
    <div className="relative">
      <FiShoppingCart className="text-2xl" />
      {card.length !== 0 ? (
        <span className="bg-red-500 text-white text-xs flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-3">
          {card.length}
        </span>
      ) : null}
    </div>
  );
};

export default CardIcon;
