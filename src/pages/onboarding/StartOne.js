import MainButton from "../../components/buttons/MainButton";
import { useHistory } from "react-router-dom";

const StartOne = () => {
  const history = useHistory();

  const getStared = () => {
    history.push("/two");
  };

  return (
    <div>
      <div>
        <div>
          <img src={process.env.PUBLIC_URL + "/banners/start-1.png"} alt="/" />
        </div>
        <div className={"my-4 mx-4 text-center"}>
          <h1 className={"font-semibold text-2xl"}>Selamat Datang</h1>
          <p>Omah Wayang Klaten Mobile Web Apps</p>
        </div>
      </div>
      <div className={"mt-12 mb-4 mx-2"}>
        <MainButton
          onClick={getStared}
          className={"w-full md:w-72 rounded-full p-4"}
        >
          Get Started
        </MainButton>
      </div>
    </div>
  );
};

export default StartOne;
