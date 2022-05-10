import Header from "../Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <div className={`${props.className} md:mt-12 mt-4 mx-2`}>
        {props.children}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
