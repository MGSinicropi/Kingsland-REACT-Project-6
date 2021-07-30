import React from "react";
import CardItem from "./CardItem";
import "../Cards/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Become Content Creators in Many Niches</h1>
      <h2>And Many Platforms Too!</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-13.jpg"
              text="Create A Youtube Channel and Express Yourself to the World"
              label="Social"
              path="/platforms"
            />
            <CardItem
              src="images/img-14.jpg"
              text="Live Stream to Your Thousands of Followers on Youtube, Patreon, and More"

              label="Streaming"
              path="/platforms"
            />
          </ul>
          {/* <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Showcase Your Top Recipes, Or Top Dishes From Anywhere and Allover"
              label="Foodie"
              path="/niches"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Get The Highscore and Share it With The World"
              label="Gaming"
              path="/niches"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Become ONE Today"
              label="Join"
              path="/SignUP"
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
