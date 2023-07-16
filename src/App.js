import React, { useState, useEffect } from "react";
import "./App.css";
import MainScreen from "./screens/MainScreen";

const App = () => {

  const [theme, setTheme] = useState('dark');

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