import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { data } from "./data";
function Highlight() {
    const [fullscreen,setScreen]=useState(true);
useEffect(()=>{
    console.log(window.innerWidth);
    if(window.innerWidth<600){
        setScreen(false);
    }
  
},[])
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding:"25px",
        background:"white",width:"100%"
      }}
    >
      <h1>Highlights</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          margin:"25px",
          width:"100%"
  
        }}
      >
        {" "}
        {fullscreen?<>
            {data &&
            data.map((ele) => {
              return (
                // <div>
                  <div className="m-3 rounded-3">
                    {console.log(ele)}{" "}
                    <img
                      variant="l"
                      src={ele.image}
                      style={{ height: "200px", width:"250px" }}
                    />
                   
                    <div>
                      <h4>{ele.title}</h4><br/>
                      <span>{ele.description}</span>
                    </div>
                  </div>
               
              );
            })}
        </>  :  <Carousel>
          {data &&
            data.map((ele) => {
              return (
                // <div>
                  <Carousel.Item>
                    {console.log(ele)}{" "}
                    <img
                      variant="l"
                      src={ele.image}
                      style={{ height: "400px", width: "100%" }}
                    />
                   
                    <div>
                      <h4>{ele.title}</h4><br/>
                      <span>{ele.description}</span>
                    </div>
                  </Carousel.Item>
               
              );
            })}
        </Carousel> }
      </div>
    </div>
  );
}

export default Highlight;
