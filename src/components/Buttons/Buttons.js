import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle //if has a style
    : STYLES[0]; // apply this style from array of styles ln 5

  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize // if has a size
    : SIZES[0]; // apply this size from array of sizes ln 7

  return (
    <Link to="/SignUp" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}>
        {children}
      </button>
    </Link>
  );
};
