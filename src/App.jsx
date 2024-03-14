import React from "react";
import "./index.scss";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleSwitchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="main-container" data-theme={theme}>
      <div className="container">
        <h1 className="header">Hello, There!</h1>
        <button className="switch-mode-btn" onClick={toggleSwitchTheme}>SWITCH MODE</button>
      </div>
    </div>
  );
}
