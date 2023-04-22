import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeToggle() {
    setIsDarkMode(!isDarkMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default DarkMode;

 
