import Layout from "../../components/layouts/Layout";
import BackToHome from "../../components/navbars/BackToHome";
import SimpleTitle from "../../components/texts/SimpleTitle";
import { useParams } from "react-router-dom";
import MainTextInput from "../../components/forms/MainTextInput";
import MainButton from "../../components/buttons/MainButton";

const DetailKategoriWayang = () => {
  const { category } = useParams();

  return (
    <Layout navbar={true} bottom={false}>
      <div aria-label={"Search Input"} className={"mt-8 mb-12"}>
        <MainTextInput
          type={"text"}
          name={"search"}
          placeholder={"Search Nama Wayang"}
        />
      </div>
      <SimpleTitle>{category}</SimpleTitle>
      <div className={"grid grid-cols-2 gap-8"}>
        <div className={"mt-4 p-4 rounded-3xl shadow-lg bg-[#EAF0FF]"}>
          <img src={process.env.PUBLIC_URL + "/banners/example.webp"} alt="" />
          <div className={"mt-4 text-center"}>
            <MainButton className={"w-full"}>Baca</MainButton>
          </div>
        </div>
      </div>
      <BackToHome />
    </Layout>
  );
};
export default DetailKategoriWayang;
