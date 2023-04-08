import React from "react";
import CategoryLeft from "./CategoryLeft";
import Satyampic from "./Satyampic.jpeg";
const Category = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        backgroundColor: "#E6F2F2",
        justifyContent: "space-between",
      }}
    >
      <CategoryLeft />

      <div style={{ margin: "30px", flex: "1" }}>
        <h3 style={{ margin: "30px" }}>Travel Guide</h3>
        <div
          style={{
            width: "100%",
            width: "560px",
            height: "226px",
            left: "764px",
            top: "1140px",
            padding: "20px",

            background: "#FFFFFF",
            borderRadius: "8px",
            display: "flex",
          }}
        >
          <div>
            <h1>Satyam Singh Chauhan</h1>
            <span> since 1999</span>
            <br />
            <button
              style={{
                margin: "20px",
                border: "2px solid green",
                color: "green",
                background: "white",
                borderRadius: "6px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <a target="blank"
                href={
                  "https://www.linkedin.com/in/satyam-singh-chauhan-050187235/"
                }
                style={{ textDecoration: "none" }}
              >
                {" "}
                Contact
              </a>
            </button>
          </div>
          <div
            style={{
              marginLeft: "25px",
              overflow: "hidden",
              borderRadius: "50%",
              height: "150px",
              width: "150px",
              backgroundImage: "none",
            }}
          >
            <img
              src={Satyampic}
              style={{
                height: "100%",
                width: "100%",
              }}
              alt="Profile"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
