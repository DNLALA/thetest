import "./home.css";
import Navbar from "../../components/navbar/navbar";
import HomeSearch from "../../components/homeSearch/HomeSearch";
import Topbar from "../../components/navbar/top/topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <HomeSearch />
    </div>
  );
};

export default Home;
