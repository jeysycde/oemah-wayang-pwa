import { useHistory } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import CategoryComponent from "./components/CategoryComponent";
import BackToHome from "../../components/navbars/BackToHome";

const Wayang = () => {
  const history = useHistory();

  return (
    <Layout bottom={false} navbar={true} title={"Wayang"}>
      <div className={"mt-8"}>
        <SimpleTitle>Wayang Seni Tradisonal Asli Indonesia</SimpleTitle>
        <div className={"mt-4"}>
          <img
            className={"rounded-2xl h-48 w-full object-cover"}
            src={process.env.PUBLIC_URL + "/banners/example.webp"}
            alt=""
          />
        </div>
        <div className={"mt-12"}>
          <SimpleTitle>Category</SimpleTitle>
          <CategoryComponent
            onClick={() => {
              history.push("/wayang/category");
            }}
            image={process.env.PUBLIC_URL + "/banners/punakawan.png"}
            title={"Punakawan"}
            description={"Punokawan berarti pula pelayan. "}
          />
        </div>
      </div>
      <BackToHome />
    </Layout>
  );
};
export default Wayang;
