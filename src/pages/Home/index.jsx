import BottomNavbar from "../../components/BottomNavbar";
import NotesList from "../../components/NotesList";
import { homeContainer } from "./styles";

const Home = () => {
  return (
    <>
      <div className={homeContainer}>
        <div className="home">
          <div className="home--textcontainer">
            <h1 className="home--title">Dreams Note</h1>
            <p className="home--desc">
              write down your ideas, thoughts, dreams, or goals for the future.
            </p>
          </div>
          <NotesList />
          <BottomNavbar />
        </div>
      </div>
    </>
  );
};

export default Home;
