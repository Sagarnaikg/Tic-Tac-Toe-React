import React, { useState } from "react";
import "./App.css";

/* components */
import PlayerCard from "./playCard";
import WinnerCard from "./winnerCard";

/* Icons */
import Icon from "./icons/icon";
import { BiRevision } from "react-icons/bi";

let arr = Array(9).fill("null");
let mapKeys = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  let [player1, setPlayer1] = useState();
  let [gameOver, setGameOver] = useState(false);

  const changeIcon = (index) => {
    if (!gameOver) {
      if (arr[index] === "null") {
        arr[index] = !player1 ? "Positive" : "Negative";
        setPlayer1(!player1);
      }
      isGameOver();
    }
  };

  const reload = () => {
    setPlayer1();
    arr.fill("null");
    setGameOver();
  };

  const isGameOver = () => {
    mapKeys.map((item) => {
      if (
        arr[item[0]] !== "null" &&
        arr[item[0]] === arr[item[1]] &&
        arr[item[1]] === arr[item[2]]
      ) {
        setGameOver(true);
      }
      return true;
    });
  };

  return (
    <div className="container">
      <div className="header">
        {/* header
        =================================== */}
        <h2>Tic-Toc-Toe</h2>

        {/* displaying diff players with thire symbol
        =================================== */}
        <div style={{ display: "flex" }}>
          <PlayerCard
            player1={player1}
            color={"#55a630"}
            title={"Player 1"}
            size={"25"}
            gameOver={gameOver}
            type={"cross"}
          />
          <PlayerCard
            player1={!player1}
            color={"#e5383b"}
            title={"Player 2"}
            size={"21"}
            gameOver={gameOver}
          />
        </div>
      </div>

      {/* interface of the game
        =================================== */}
      <div className="cover">
        <div className="game-body">
          {arr.map((item, index) => {
            return (
              <div className="card" onClick={() => changeIcon(index)}>
                <Icon name={item} />
              </div>
            );
          })}
        </div>
      </div>

      {/* reset game
        =================================== */}
      <div className="result">
        <button className="reset-btn" onClick={() => reload()}>
          <BiRevision size="25" color="#ffffff" />
        </button>

        {/* displaying result
        =================================== */}
        <WinnerCard gameOver={gameOver} player1={player1} />
      </div>
    </div>
  );
}

export default App;
