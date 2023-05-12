import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";
import "./map.css";

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  setCoordinates: (coordinates: any) => void;
  setBounds: (bounds: any) => void;
  coordinates: any;
}

const Map: React.FC<MapProps> = ({
  center,
  setCoordinates,
  setBounds,
  coordinates,
}) => {
  return (
    <div className="map">
      <h1 className="lsTitle">Map</h1>
      <div style={{ height: "200px", width: "100%" }}>
        <LoadScript
          googleMapsApiKey="AIzaSyA7JHauvdRTB18f5SUd3-k_oY6RB0G9x5o"
          libraries={["places"]}
        >
          <GoogleMap
            zoom={10}
            mapContainerClassName="map-container"
            center={center}
            // onLoad={(map) => {
            //   // Set the map instance and update coordinates/bounds
            //   //   setCoordinates(map.getCenter());
            //   setBounds(map.getBounds());
            // }}
          />
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
