import Layout from "../../components/layouts/Layout";
import MainCategory from "../../components/categories/MainCategory";
import MainTextInput from "../../components/forms/MainTextInput";
import TextWithIcon from "../../components/badges/TextWithIcon";
import MainProduct from "../../components/products/MainProduct";

const Home = () => {
  return (
    <Layout>
      <div className={"md:ml-32 mx-4 md:mt-20 mt-4"}>
        <div className={"grid grid-cols-1 md:grid-cols-5 md:gap-2"}>
          <div className={"block md:hidden"}>
            <img
              className={"h-full w-full object-cover"}
              alt={"Header Banner"}
              src={
                "https://www.exova.id/storage/users/231/products/61f3fafdc983c/1280/1643380250-54.jpg"
              }
            />
          </div>
          <div className={"mt-8 md:mt-24 col-span-2"}>
            <h1 className={"font-semibold text-3xl md:text-4xl leading-snug"}>
              Take your <span className={"text-blue-500"}>moment</span> and{" "}
              <span className={"text-blue-500"}>vacation</span> in Bali!
            </h1>
            <h1 className={"font-normal text-md text-gray-500 mt-3"}>
              Dokumentasikan liburan, kegiatan, dan acaramu bersama kami.
            </h1>
            <div className="hidden md:block">
              <div className={"grid grid-cols-2 gap-4 my-8"}>
                <TextWithIcon mainClass="my-8" imageClass="rounded-full" icon={process.env.PUBLIC_URL + "/icons/icon-bg.png"} label="56+ jasa vidio/foto" />
                <TextWithIcon mainClass="my-8" imageClass="rounded-full" icon={process.env.PUBLIC_URL + "/icons/icon-bg.png"} label="37+ freelancer di Bali" />
              </div>
            </div>
            <div className={"mt-8 md:mt-0"}>
              <h1 className={"font-medium text-md mt-3"}>
                Cari nama kegiatan atau freelancer
              </h1>
              <div className="w-11/12">
                <MainTextInput />
              </div>
              <h1 className={"font-medium text-xs text-gray-500 mt-3"}>
                Pencarian terpopuler: Pernikahan, Liburan, Metatah
              </h1>
            </div>
            <div
              className={
                "md:hidden block grid grid-cols-1 md:grid-cols-2 gap-4 mt-14"
              }
            >
               <TextWithIcon mainClass="my-8" imageClass="rounded-lg" icon={process.env.PUBLIC_URL + "/icons/icon-bg.png"} label="Jasa" />
               <TextWithIcon mainClass="my-8" imageClass="rounded-lg" icon={process.env.PUBLIC_URL + "/icons/icon-bg.png"} label="Freelancer" />
            </div>
          </div>
          <div className={"md:col-span-3 hidden md:block"}>
            <img
              className={"h-full object-cover"}
              alt={"Header Banner"}
              src={
                "https://www.exova.id/storage/users/231/products/61f3fafdc983c/1280/1643380250-54.jpg"
              }
            />
          </div>
        </div>
      </div>
      <div className={"md:container md:mx-auto mx-4"}>
        <div className={"md:mt-32 mt-20"}>
          <h1 className={"font-medium text-3xl"}>Kategori Exova</h1>
          <h1 className={"font-medium text-md text-gray-500 mt-2"}>
            Beberapa kategori dari Exova yang bisa kamu pilih!
          </h1>
          <div className={"grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"}>
            <MainCategory />
            <MainCategory />
            <MainCategory />
            <MainCategory />
          </div>
        </div>
      <div className="grid grid-cols-2 gap-2 my-48 md:mx-24">
        <div className="md:mr-auto">
          <div>
            <div className="absolute">
              <div className="mt-6 ml-36 ">
                <TextWithIcon mainClass="bg-white p-2 shadow rounded-lg my-2" imageClass="rounded-lg" icon={process.env.PUBLIC_URL + "/icons/icon-bg.png"} label="37+ freelancer di Bali" />
              </div>
            </div>
            <div className="absolute">
              <div className="ml-48 mt-24">
                <TextWithIcon mainClass="bg-white p-2 shadow rounded-lg my-2" imageClass="rounded-lg" icon={process.env.PUBLIC_URL + "/icons/icon-bg.png"} label="56+ jasa vidio/foto" />
              </div>
            </div>
          <img className="w-4/6 h-72 object-cover" src={
            "https://www.exova.id/storage/users/231/products/61f3fafdc983c/1280/1643380250-54.jpg"
          }
          alt="Image" />
          </div>
        </div>
        <div>
          <h1 className="font-medium text-2xl">Mengapa menggunakan jasa <span className="text-blue-500"> Exova?</span></h1>
          <p className={"font-normal text-md text-gray-500 mt-3"}>Kami akan memberikan yang terbaik dan tidak akan mengecewakan anda.</p>
          <div className="mt-12 p-2">
            <TextWithIcon mainClass="my-8" imageClass="rounded-lg" icon={process.env.PUBLIC_URL + "/icons/icon-bg.png"} label="Mudah mencari vidio/fotografer" />
            <TextWithIcon mainClass="my-8" imageClass="rounded-lg" icon={process.env.PUBLIC_URL + "/icons/icon-bg.png"} label="Bebas memilih vidio/fotografer" />
            <TextWithIcon mainClass="my-8" imageClass="rounded-lg" icon={process.env.PUBLIC_URL + "/icons/icon-bg.png"} label="Nego harga sesuka hati" />
            <TextWithIcon mainClass="my-6" imageClass="rounded-lg" icon={process.env.PUBLIC_URL + "/icons/icon-bg.png"} label="Pembayaran mudah dan praktis" />
          </div>
          <div className="bg-blue-500 p-2 w-max rounded-lg">
            <TextWithIcon textClass="text-white" mainClass="bg-blue-500" imageClass="rounded-lg" icon={process.env.PUBLIC_URL + "/icons/icon-bg.png"} label="Bisa jual jasa skill vidio/foto kamu!" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-8">
          <div className="my-auto">
            <h1 className="font-medium text-2xl">Jelajahi jasa atau freelancer kami</h1>
          </div>
          <div className="bg-blue-50 duration-500 cursor-pointer hover:bg-blue-100 py-2 px-4 rounded-lg">
            <span className="font-medium text-base text-blue-500">Lihat semua</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 my-12">
          <MainProduct />
        </div>
      </div>
      <div>
        <div className="my-auto text-center">
          <h1 className="font-medium text-2xl">Apa kata mereka?</h1>
        </div>
      </div>
      </div>
    </Layout>
  );
};
export default Home;
