import React from "react";
import ReactDOM from "react-dom";

function ListItem(prop) {
  return (
    <div
      onClick={() => {
        prop.removeItem(prop.id);
      }}
    >
      <li>{prop.value}</li>
    </div>
  );
}

export default ListItem;
