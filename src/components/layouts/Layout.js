import Header from "../Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className={`md:mx-24 md:mt-12 mt-4`}>{props.children}</div>
    </>
  );
};
export default Layout;
