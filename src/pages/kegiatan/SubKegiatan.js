import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import { useParams } from "react-router-dom";
import MainButton from "../../components/buttons/MainButton";

const SubKegiatan = () => {
  const { slug } = useParams();
  console.log(slug);

  return (
    <Layout navbar={true}>
      <div className={"mt-8 text-center"}>
        <img
          className={"rounded-3xl h-48 mx-auto"}
          src={process.env.PUBLIC_URL + "/banners/banner-1.png"}
          alt=""
        />
      </div>
      <div className={"mt-4 md:text-center text-left"}>
        <SimpleTitle>Seni Tari Tradisi</SimpleTitle>
        <p className={"mt-2"}>
          Pentas Seni Tari Tradisi akan menghadirkan narasumber Martha Endang W,
          S.Pd
        </p>
        <h4 className={"font-semibold"}>8 Oktober 2021</h4>
        <div className={"mt-12 text-center"}>
          <MainButton>Link Pendaftaran</MainButton>
        </div>
      </div>
    </Layout>
  );
};
export default SubKegiatan;
