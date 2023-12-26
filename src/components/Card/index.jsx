import { Link } from "react-router-dom";
import { cardContainer } from "./styles";
import pencilIcon from "/src/assets/icons/editblack.png";
import deleteIcon from "/src/assets/icons/archiveblack.png";

const Card = ({ noteid, title, content, date }) => {
  return (
    <div className={cardContainer}>
      <p className="card--title">
        <Link to={`/notes/${noteid}`} className="card--link">
          {title}
        </Link>
      </p>
      <div className="card--desc-wrap">
        <p className="card--desc">{content}</p>
      </div>
      <div className="card--navbottom">
        <div className="card--date">{date}</div>
        <div className="card--btn-group">
          <button className="card--btn">
            <Link to={`/editnotes/${noteid}`} className="card--link">
              <img src={pencilIcon} alt="" />
            </Link>
          </button>
          <button className="card--btn">
            <Link to={`/editnotes/${noteid}`} className="card--link">
              <img src={deleteIcon} alt="" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
