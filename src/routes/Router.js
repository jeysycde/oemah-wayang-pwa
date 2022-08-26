import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import StartOne from "../pages/onboarding/StartOne";
import StartTwo from "../pages/onboarding/StartTwo";
import StartThree from "../pages/onboarding/StartThree";

const Router = () => {
  return (
    <>
      <Route path={"/"} component={StartOne} exact />
      <Route path={"/two"} component={StartTwo} exact />
      <Route path={"/three"} component={StartThree} exact />
      <Route path={"/home"} component={Home} exact />
    </>
  );
};
export default Router;
