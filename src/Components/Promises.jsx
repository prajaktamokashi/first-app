import React, { useState, useEffect } from "react";

export default function Promises() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <h1>To Do List:</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data?.map((item) => (
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              margin: "10px",
            }}
            key={item.id}
          >
            <input type="checkbox" checked={item.completed} />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}