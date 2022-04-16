import Header from "../Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className={`${props.className} md:mt-12 mt-4 mx-2`}>
        {props.children}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
