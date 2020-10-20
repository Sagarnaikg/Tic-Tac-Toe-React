import React from "react";

/* ICONS */
import Positive from "./positive";
import Negative from "./negative";
import { FiMinus } from "react-icons/fi";

const Icon = ({ name }) => {
  switch (name) {
    case "Positive":
      return <Positive />;
    case "Negative":
      return <Negative />;
    default:
      return <FiMinus size="25" color="#979dac" />;
  }
};

export default Icon;
