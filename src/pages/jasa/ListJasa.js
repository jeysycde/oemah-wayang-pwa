import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import SimpleDisplayNoImage from "../../components/products/SimpleDisplayNoImage";
import { useHistory } from "react-router-dom";

const ListJasa = () => {
  const history = useHistory();

  const getDetailJasa = (params) => {
    return history.push(`/jasa/${params}`);
  };

  return (
    <Layout navbar={true} title={"Jasa"}>
      <div className={"mt-12"} aria-label={"kegiatan terbaru"}>
        <SimpleTitle className={"uppercase"}>Category</SimpleTitle>
      </div>
      <div className={"mt-4 grid grid-cols-2 gap-4"}>
        <SimpleDisplayNoImage
          onClick={() => {
            getDetailJasa("fasilitas");
          }}
          width={"w-full"}
        >
          Fasilitas
        </SimpleDisplayNoImage>
        <SimpleDisplayNoImage
          onClick={() => {
            getDetailJasa("sarana");
          }}
          width={"w-full"}
        >
          Sarana Prasarana
        </SimpleDisplayNoImage>
      </div>
    </Layout>
  );
};
export default ListJasa;
