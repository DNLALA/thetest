import "./searchitem.css";
import { useState, useEffect } from "react";
import React from "react";
// import axios from "axios";
// import SearchItem from "./SearchItem";

type PlacesType = {
  name: string;
  photo: {
    images: {
      large: {
        url: string;
      };
    };
  };
  price: string;
  rating: string;
  caption: string;
  // Add other properties of places here
};

const SearchItem = ({ places }: { places: PlacesType }) => {
  return (
    <div className="searchItem">
      <img
        src={
          places.photo
            ? places.photo.images.large.url
            : "https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        }
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{places.name} </h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">{places.caption}</span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{places.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{places.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
