import React, { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const CategoryLeft = () => {
  const arr = ["Adventure", "Culinary", "Eco-tourism", "Family", "Sport"];

  const navigate=useNavigate();
  return (
    <div style={{ width: "100%" ,corsor:"pointer" ,flex:"1"}}>
      <h2 style={{padding:"30px"}}> Category :</h2>
      {arr.map((ele,i) => {
        return (
          <div
            className="category"
            style={{
              height: "75px",
              width: "100%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              margin: "10px",
            }}
            onClick={()=>{
              navigate("/details", {state:{ele:ele},key:{i}})
          }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width:"90%",
                justifyContent: "space-between",
              }}
            >
              <div>{ele}</div>
              <div style={{cursor:"pointer"}}>
                <BsFillArrowRightSquareFill
                  style={{
                    background: "green",
                    color: "white",
                    fontSize: "30px",
                  }}
                onClick={()=>{
                    navigate("/details", {state:{ele:ele},key:{i}})
                }}
           
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryLeft;
