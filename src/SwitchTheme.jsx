import React, { useState } from "react";
import "./index.scss";
import useLocalStorage from "./hooks/useLocalStorage";

export default function SwitchTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <div className="main-container" data-theme={theme}>
      <div className="container">
        <h1 className="header">Hello, There!</h1>
        <button className="switch-mode-btn" onClick={toggleTheme}>SWITCH MODE</button>
      </div>
    </div>
  );
}
