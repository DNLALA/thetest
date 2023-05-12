import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    bl_longitude: "108.473209",
    tr_longitude: "109.149359",
    tr_latitude: "12.838442",
    // limit: "30",
    // currency: "USD",
    // subcategory: "hotel,bb,specialty",
    // adults: "1",
  },
  headers: {
    "X-RapidAPI-Key": "19cc7b5a8amsh57515de733733cdp1c6456jsn88f892449613",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPlacesData;
