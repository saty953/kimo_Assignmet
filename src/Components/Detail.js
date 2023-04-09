import React, { useEffect, useState } from "react";
import { details } from "./details";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const name = location.state.ele;
  const [array, set] = useState([]);

  useEffect(() => {
    {
      details.filter((ele) => {
        if (ele.name === name) {
          set(ele.activities);
        }
      });
    }
  }, [name]);

  return (
    <div style={{ background: "#E6F2F2", height: "100vh" }}>
      <h1
        style={{
          color: "blue",
          borderBottom: "2px solid gray",
          padding: "20px",
        }}
      >
        {" "}
        All the category related to {name}
      </h1>
      <ul style={{ margin: "40px", paddingTop: "40px" }}>
        {array.map((data) => {
          return <li style={{ color: "gray" }}>{data.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Detail;
