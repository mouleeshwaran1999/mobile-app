import React from "react";
import { product } from "../../data";
import "./Home.css";

const Home = () => {
  var data = product;
  console.log(data);
  return (
    <div className="home_cointainer">
      <h1 className="home_cointainer_header">Home</h1>
      <div className="home_items">
        {data.map((data) => (
          <div className="home_item_box">
            <img class="banner-image" src={data.thumbnail}></img>
            <h1 className="home_item_name">Name : {data.title} </h1>
            <div className="home_item_prize">Prize :${data.price}</div>
            <div className="home_item_rating">Rating :{data.rating}</div>
            <button class="btn">BUY NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
