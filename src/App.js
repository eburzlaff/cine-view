import React, { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MainScreen from "./screens/MainScreen";

const App = () => {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <MainScreen theme={theme} setTheme={setTheme}/>
    </>
  );
};

export default App;