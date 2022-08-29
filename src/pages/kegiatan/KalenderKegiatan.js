import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import KegiatanShortcut from "./components/KegiatanShortcut";

const KalenderKegiatan = () => {
  return (
    <Layout navbar={true} title={"Kalender Kegiatan"}>
      <div className={"mt-12"} aria-label={"kegiatan terbaru"}>
        <SimpleTitle className={"uppercase"}>Kegiatan Terbaru</SimpleTitle>
      </div>
      <div>
        <div className={"my-2"}>
          <img
            className={"rounded-3xl h-48"}
            src={process.env.PUBLIC_URL + "/banners/banner-1.png"}
            alt=""
          />
        </div>
        <div className={"my-2"}>
          <img
            className={"rounded-3xl h-48"}
            src={process.env.PUBLIC_URL + "/banners/banner-2.png"}
            alt=""
          />
        </div>
        <div className={"mt-12"}>
          <KegiatanShortcut
            title={"Tari Tradisional Nusantara"}
            location={"Omah Wayang Klaten"}
            author={"Omah Wayang Klaten"}
            date={"11:00"}
          />
        </div>
      </div>
    </Layout>
  );
};
export default KalenderKegiatan;
