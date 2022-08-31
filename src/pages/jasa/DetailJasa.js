import Layout from "../../components/layouts/Layout";
import { useParams } from "react-router-dom";
import SimpleTitle from "../../components/texts/SimpleTitle";
import DisplayJasaShortcut from "./components/DisplayJasaShortcut";

const DetailJasa = () => {
  const { slug } = useParams();

  return (
    <Layout navbar={true} title={slug}>
      <div className={"mt-4"}>
        <SimpleTitle>Fasilitas yang kami sediakan</SimpleTitle>
        <div className={"mt-2 grid grid-cols-2 gap-4"}>
          <DisplayJasaShortcut title={slug} />
        </div>
      </div>
    </Layout>
  );
};
export default DetailJasa;
