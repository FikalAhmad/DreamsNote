import { Link } from "react-router-dom";
import { BNContainer } from "./styles";
import plusIcon from "/src/assets/icons/plus-icon.png";

const BottomNavbar = () => {
  return (
    <div className={BNContainer}>
      <div className="btn--wrap">
        <button className="btn--button">
          <Link to="/addnotes" className="btn--link">
            <img src={plusIcon} alt="" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BottomNavbar;
