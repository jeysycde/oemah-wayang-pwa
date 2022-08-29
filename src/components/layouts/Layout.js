import { Toaster } from "react-hot-toast";
import BottomNavbar from "../navbars/BottomNavbar";
import SimpleNavbar from "../navbars/SimpleNavbar";

const Layout = ({ children, className, navbar, title = null }) => {
  return (
    <>
      {/*<Header />*/}
      {navbar ? <SimpleNavbar title={title} /> : null}
      <Toaster position="top-center" reverseOrder={false} />
      <div className={`${className} md:mt-12 mt-4 mx-4`}>{children}</div>
      <BottomNavbar />
      {/*<Footer />*/}
    </>
  );
};
export default Layout;
