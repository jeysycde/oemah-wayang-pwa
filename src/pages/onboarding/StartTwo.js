import RoundedButton from "../../components/buttons/RoundedButton";
import { useHistory } from "react-router-dom";

const StartTwo = () => {
  const history = useHistory();

  const nextPage = () => {
    history.push("/three");
  };

  return (
    <div>
      <div>
        <div>
          <img src={process.env.PUBLIC_URL + "/banners/start-2.png"} alt="/" />
        </div>
        <div className={"my-4 mx-4 text-left"}>
          <h1 className={"font-semibold text-2xl"}>Belajar bersama kami</h1>
          <p>
            Menyelenggarakan pendidikan dan pendokumentasian karya seni
            tradisonal
          </p>
        </div>
        <div className={"m-4 mt-8 text-right"}>
          <RoundedButton onClick={nextPage} className={"text-xl"}>
            {" "}
            >{" "}
          </RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default StartTwo;
