import "./list.css";
import Topbar from "../../components/navbar/top/topbar";
import Navbar from "../../components/navbar/navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchitem/SearchItem";
import HomeSearch from "../../components/homeSearch/HomeSearch";
import HomeHotell from "../homHotel/HomeHotell";
import HotelSearch from "../../components/hotelsearch/HotelSearch";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  LoadScript,
} from "@react-google-maps/api";
import { useMemo, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import getPlacesData from "../../api";
import Map from "../../components/map/Map";
import MapDown from "../../components/mapDown/MapDown";

const List = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [bounds, setBounds] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
      setLoading(false);
    });
  }, []);

  const center = { lat: 9.0765, lng: 7.3986 };

  const location = useLocation();

  return (
    <div>
      <Topbar />
      <Navbar />
      <HotelSearch />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <Map
              center={center}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={setCoordinates}
            />
            <MapDown />
          </div>
          <div className="listResult">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Grid spacing={3} className="">
                {places?.map((place, i) => (
                  <Grid item key={i}>
                    <SearchItem places={place} />
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
