import { Link } from "react-router-dom";
import { BNContainer } from "./styles";
import plusIcon from "/src/assets/icons/addblack.png";
import noteIcon from "/src/assets/icons/archiveblack.png";

const BottomNavbar = () => {
  return (
    <div className={BNContainer}>
      <div className="btn--wrap">
        <button className="btn--button">
          <Link to="/addnotes" className="btn--link">
            <img src={plusIcon} alt="" />
            <span>Add Note</span>
          </Link>
        </button>
        <button className="btn--button">
          <Link to="/" className="btn--link">
            <img src={noteIcon} alt="" />
            <span>Note Archive</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BottomNavbar;
