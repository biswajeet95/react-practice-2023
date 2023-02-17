import React, { useState } from "react";

const SimpleTodoFile = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!newItem) {
      alert("Enter an Items");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 200),
      value: newItem,
    };
    setItems((list) => [...list, item]);
    setNewItem("");
  };
  const handleDelete = (id) => {
    setItems(items.filter((data) => data.id !== id));
  };

  return (
    <div>
      <h1>SimpleTodoFile</h1>
      <input
        type="text"
        placeholder="Add here"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => handleDelete(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SimpleTodoFile;
