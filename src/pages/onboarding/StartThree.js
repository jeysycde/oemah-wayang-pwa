import RoundedButton from "../../components/buttons/RoundedButton";
import { useHistory } from "react-router-dom";

const StartThree = () => {
  const history = useHistory();

  const nextPage = () => {
    history.push("/three");
  };

  return (
    <div>
      <div>
        <div>
          <img src={process.env.PUBLIC_URL + "/banners/start-3.png"} alt="/" />
        </div>
        <div className={"my-4 mx-4 text-left"}>
          <h1 className={"font-semibold text-2xl"}>Kembangkan diri anda</h1>
          <p>
            Mengupayakan pelestarian , revitalisasi, pengembangan, dan
            Pemberdayaan nilai-nilai seni budaya dengan kegiatan yang di
            laksanakan
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

export default StartThree;
