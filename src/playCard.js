import React from "react";

/* icons */
import { HiUser } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";

const PlayerCard = ({ player1, color, title, size, gameOver, type }) => {
  if (!gameOver) {
    if (!player1) {
      return (
        <div className="playerCard-active">
          <HiUser color={color} />
          <p style={{ margin: "0 10px 0 10px" }}> {title}</p>
          {type === "cross" ? (
            <FiX size={size} color={color} />
          ) : (
            <FiCircle size={size} color={color} />
          )}
        </div>
      );
    } else {
      return (
        <div className="playerCard">
          <HiUser color={color} />
          <p style={{ margin: "0 10px 0 10px" }}> {title}</p>
          {type === "cross" ? (
            <FiX size={size} color={color} />
          ) : (
            <FiCircle size={size} color={color} />
          )}
        </div>
      );
    }
  } else {
    return (
      <div className="playerCard">
        <HiUser color={color} />
        <p style={{ margin: "0 10px 0 10px" }}> {title}</p>
        {type === "cross" ? (
          <FiX size={size} color={color} />
        ) : (
          <FiCircle size={size} color={color} />
        )}
      </div>
    );
  }
};

export default PlayerCard;
