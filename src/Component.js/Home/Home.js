import React from "react";
import { product } from "../../data";
import "./Home.css";

const Home = () => {
  var data = product;
  return (
    <div className="home_cointainer">
      <h1 classname="home_cointainer_header">Home</h1>
      <div classname="home_items">
        {data.map((data) => (
          <div className="home_item_box">{data.title}</div>
        ))}
      </div>
    </div>
  );
};
export default Home;
