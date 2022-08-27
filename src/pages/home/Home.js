import Layout from "../../components/layouts/Layout";
import SimpleNavbar from "../../components/navbars/SimpleNavbar";
import SimpleDisplay from "../../components/products/SimpleDisplay";
import "../../index.css";
import SimpleCard from "../../components/cards/SimpleCard";
import MainButton from "../../components/buttons/MainButton";
import SimpleCalendarCard from "../../components/cards/SimpleCalendarCard";
import SimpleTitle from "../../components/texts/SimpleTitle";
import SimpleDisplayNoImage from "../../components/products/SimpleDisplayNoImage";
import MainReview from "../../components/reviews/MainReview";

const Home = () => {
  return (
    <Layout>
      <SimpleNavbar />
      <div aria-label={"content"} className={"mt-4"}>
        <div
          aria-label={"slide-horizontal-content"}
          className={"overflow-x-scroll whitespace-nowrap md:text-center"}
        >
          <SimpleDisplay label={"Pelatihan"} />
          <SimpleDisplay label={"Karya Seni"} />
          <SimpleDisplay label={"Pelestarian"} />
        </div>
        <div aria-label={"cards"} className={"mt-8"}>
          <SimpleCard
            name={"About Us"}
            title={"Omah Wayang Klaten Mobile Website"}
            description={
              "Omah Wayang Klaten terbentuk atas dasar keprihatinan terhadap hidup, tumbuh dan berkembangnya budaya Jawa serta keinginan untuk mewujudkan sebuah pusat studi seni tradisional"
            }
            buttonLabel={"View More"}
            onClick={() => {
              console.log("OK");
            }}
          />
        </div>
        <SimpleCalendarCard />

        <div
          aria-label={"images-content"}
          className={"mt-8 grid md:grid-cols-2 grid-cols-1 gap-2"}
        >
          <div className={"my-2"}>
            <img
              className={"rounded-3xl"}
              src={process.env.PUBLIC_URL + "/banners/banner-1.png"}
              alt=""
            />
          </div>
          <div className={"my-2"}>
            <img
              className={"rounded-3xl"}
              src={process.env.PUBLIC_URL + "/banners/banner-2.png"}
              alt=""
            />
          </div>
        </div>
        <div className={"mt-12"}>
          <div aria-label={"Jasa"}>
            <SimpleTitle>Jasa yang kami tawarkan </SimpleTitle>
          </div>
          <div className={"overflow-x-scroll flex flex-nowrap mt-4"}>
            <SimpleDisplayNoImage>Fasilitas</SimpleDisplayNoImage>
            <SimpleDisplayNoImage>Sarana Prasarana</SimpleDisplayNoImage>
            <SimpleDisplayNoImage>Produk Kerajinan</SimpleDisplayNoImage>
            <SimpleDisplayNoImage>Pelatihan Seni</SimpleDisplayNoImage>
          </div>
        </div>
        <div aria-label={"Testimonial"} className={"mt-12"}>
          <div aria-label={"Jasa"}>
            <SimpleTitle>Testimonials</SimpleTitle>
          </div>
          <div className={"overflow-x-scroll flex flex-nowrap mt-4"}>
            <MainReview
              description={
                "Omah Wayang merupakan tempat pembelajaran bagi pecinta dan  pemerhati budaya "
              }
              author={"Amigo Grup "}
            />

            <MainReview
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              }
              author={"Lorem Ipsum"}
            />
          </div>
        </div>
        <div aria-label={"Kontak"} className={"mt-12 mb-24"}>
          <div className={"grid grid-cols-2 md:grid-cols-4 gap-2"}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/banners/socials/fb.png"}
                alt="Facebook"
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/banners/socials/yt.png"}
                alt="Youtube"
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/banners/socials/ig.png"}
                alt="Instagram"
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/banners/socials/email.png"}
                alt="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
