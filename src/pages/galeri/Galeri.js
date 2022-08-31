import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import AlertModal from "../../components/modals/AlertModal";
import { Carousel } from "react-responsive-carousel";

const Galeri = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <Layout navbar={true} title={"Galeri"}>
      <AlertModal
        showModal={showCarousel}
        handleClose={() => {
          setShowCarousel(false);
        }}
      >
        <Carousel>
          <div>
            <img
              className={"rounded-xl"}
              src={process.env.PUBLIC_URL + "/banners/example.webp"}
              alt=""
            />
          </div>
          <div>
            <img
              className={"rounded-xl"}
              src={process.env.PUBLIC_URL + "/banners/example.webp"}
              alt=""
            />
          </div>
        </Carousel>
      </AlertModal>
      <div className={"mt-12"}>
        <SimpleTitle>Gallery Kegiaran Omah Wayang</SimpleTitle>
        <div className={"mt-4"}>
          <div className={"p-4 bg-white shadow-lg rounded-lg"}>
            <SimpleTitle className={"text-blue-400"} fontSize={"text-xs"}>
              Kumpulan Foto Kegiatan{" "}
            </SimpleTitle>
            <SimpleTitle fontSize={"text-sm my-2"}>
              Gallery Kegiaran Omah Wayang
            </SimpleTitle>
            <div className={"grid grid-cols-3 gap-4"}>
              <div
                onClick={() => {
                  setShowCarousel(true);
                }}
              >
                <img
                  className={"rounded-xl"}
                  src={process.env.PUBLIC_URL + "/banners/example.webp"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Galeri;
