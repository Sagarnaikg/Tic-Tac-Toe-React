import React from "react";

/* icons */
import { GrTrophy } from "react-icons/gr";
import { HiUser } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";

const WinnerCard = ({ gameOver, player1 }) => {
  if (gameOver) {
    return (
      <div className="winner">
        <div className="msg">
          <GrTrophy size="20" />
          <p className="txt"> We have a winner</p>

          <GrTrophy size="20" />
        </div>
        {player1 ? (
          <div className="playerCard">
            <HiUser color="#55a630" />
            <p style={{ margin: "0 10px 0 10px" }}> Player 1</p>
            <FiX size="25" color="#55a630" />
          </div>
        ) : (
          <div className="playerCard">
            <HiUser color="#e5383b" />
            <p style={{ margin: "0 10px 0 10px" }}> Player 2</p>
            <FiCircle size="21" color="#e5383b" />
          </div>
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default WinnerCard;
