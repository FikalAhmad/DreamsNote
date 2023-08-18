import { Link } from "react-router-dom";
import { cardContainer } from "./styles";
import pencilIcon from "/src/assets/icons/pencil-icon.png";

const Card = ({ noteid, title, content }) => {
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
      <button className="card--btn">
        <Link to={`/editnotes/${noteid}`} className="card--link">
          <img src={pencilIcon} alt="" />
        </Link>
      </button>
    </div>
  );
};

export default Card;
