import BottomNavbar from "../../components/BottomNavbar";
import NotesList from "../../components/NotesList";
import { homeContainer } from "./styles";

const Home = () => {
  return (
    <>
      <div className={homeContainer}>
        <div className="home--textcontainer">
          <div className="home--title">Dreams Note</div>
          <div className="home--desc">
            write down your ideas, thoughts, dreams, or goals for the future.
          </div>
        </div>
        <NotesList />
        <BottomNavbar />
      </div>
    </>
  );
};

export default Home;
