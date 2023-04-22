import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import DarkMode from "./DarkMode";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <DarkMode
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          ShoppingList={ShoppingList}
          itemData={itemData}
        />
      </header>
    </div>
  );
}

export default App;