import React, { useState } from "react";
import ListItem from "./ListItem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState([]);

  function removeItem(id) {
    setItemList(
      itemList.filter((value, index) => {
        return id !== index;
      })
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={(event) => {
            const inputvalue = event.target.value;
            setInputValue(inputvalue);
          }}
          type="text"
          value={inputValue}
        />
        <button
          onClick={() => {
            setItemList([...itemList, inputValue]);
            setInputValue("");
          }}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        {itemList.map((value, index) => {
          return (
            <ListItem
              key={index}
              id={index}
              value={value}
              removeItem={removeItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
