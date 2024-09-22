import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';
const Home = () => {
  return (
    <div className="carousel-div">
    <Carousel
      showThumbs={false}
      centerMode
      autoPlay
      interval={2000}
      infiniteLoop
      // preventMovementUntilSwipeScrollTolerance
      className="carousel"
    >
      <div style={{ marginLeft: "10px", marginRight: "10px" , borderRadius: "10px" }}>
        <img alt="#" src="https://assetscdn1.paytm.com/images/catalog/view_item/2699893/1719426863191.jpg?format=webp&imwidth=1750" />
      </div>
      <div style={{ marginLeft: "10px", marginRight: "10px" , borderRadius: "10px" }}>
        <img alt="#" src="https://assets-in.bmscdn.com/promotions/cms/creatives/1720784019967_freeaccesswebws.jpg" />
      </div>
      <div style={{ marginLeft: "10px", marginRight: "10px" , borderRadius: "10px" }}>
        <img alt="#" src="https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg" />
      </div>
      <div style={{ marginLeft: "10px", marginRight: "10px" , borderRadius: "10px" }}>
        <img alt="#" src="https://assetscdn1.paytm.com/images/catalog/view_item/2753955/1720722785013.jpg?format=webp&imwidth=1750" />
      </div>
      <div style={{ marginLeft: "10px", marginRight: "10px" , borderRadius: "10px" }}>
        <img alt="#" src="https://assets-in.bmscdn.com/promotions/cms/creatives/1720596235855_thegarfieldmovieweb.jpg" />
      </div>
    </Carousel>
    </div>
  );
};

export default Home;
