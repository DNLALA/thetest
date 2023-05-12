import { Autocomplete, LoadScript } from "@react-google-maps/api";
import "./homesearch.css";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HomeSearch = () => {
  const options = {
    bounds: {
      north: 11.466667,
      south: 4.266667,
      east: 14.7,
      west: 2.683333,
    },
    strictBounds: true,
    componentRestrictions: { country: "ng" },
  };

  return (
    <div className="sec">
      <form action="" className="search-form">
        <button type="submit" className="search-submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <LoadScript
          googleMapsApiKey="AIzaSyA7JHauvdRTB18f5SUd3-k_oY6RB0G9x5o"
          libraries={["places"]}
        >
          <Autocomplete className="autocomplete" options={options}>
            <input
              type="text"
              placeholder="WHERE ARE YOU HEADED TO ?"
              className="search-input"
            />
          </Autocomplete>
        </LoadScript>
      </form>
    </div>
  );
};

export default HomeSearch;
