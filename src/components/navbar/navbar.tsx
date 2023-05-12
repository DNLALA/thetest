import "./navbar.css";
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="narbar">
      <div className="navContainer">
        <img
          className="logo"
          src="https://f9f022adc1.imgdist.com/public/users/BeeFree/beefree-ssmhiio2yv8/logo.png"
          alt="theTravelHunters"
        />

        <div className="header">
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stay</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flight</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attraction</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Car Ranters</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
