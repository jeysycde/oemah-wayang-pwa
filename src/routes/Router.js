import { Route } from "react-router-dom";
import Home from "../user/home/Home";
import DetailProduct from "../user/products/DetailProduct";

const Router = () => {
  return (
    <>
      <Route path={"/"} component={Home} exact />
      <Route path={"/products/:slug"} component={DetailProduct} exact />
    </>
  );
};
export default Router;
