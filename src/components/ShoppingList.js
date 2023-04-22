import React from "react";
import Item from "./Item";

function ShoppingList({ items, cartItems, addItem, removeItem }) {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  function handleChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            addItem={addItem}
            removeItem={removeItem}
            cartItems={cartItems}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;