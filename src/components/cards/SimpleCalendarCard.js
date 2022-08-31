import MainButton from "../buttons/MainButton";
import { useHistory } from "react-router-dom";

const SimpleCalendarCard = () => {
  const history = useHistory();

  return (
    <div className={"mt-8 p-8 rounded-3xl bg-[#EAF0FF]"}>
      <div className={"grid grid-cols-2 gap-4"}>
        <div>
          <h1>
            Lihat Kalender Kegiatan{" "}
            <span className={"text-[#92A3FD]"}>Kami</span>
          </h1>
          <div className={"mt-4"}>
            <MainButton
              onClick={() => {
                history.push("/kegiatan");
              }}
            >
              Lihat Detail
            </MainButton>
          </div>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/banners/calendar.png"} alt="" />
        </div>
      </div>
    </div>
  );
};
export default SimpleCalendarCard;
