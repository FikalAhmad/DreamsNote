import { cardContainer } from "./styles";
import pencilIcon from "/src/assets/icons/pencil-icon.png";

const Card = ({ title, content }) => {
  return (
    <div className={cardContainer}>
      <div className="card--title">{title}</div>
      <div className="card--desc">{content}</div>
      <button className="card--btn">
        <img src={pencilIcon} alt=""></img>
      </button>
    </div>
  );
};

export default Card;
