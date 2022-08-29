import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import StartOne from "../pages/onboarding/StartOne";
import StartTwo from "../pages/onboarding/StartTwo";
import StartThree from "../pages/onboarding/StartThree";
import KalenderKegiatan from "../pages/kegiatan/KalenderKegiatan";
import SubKegiatan from "../pages/kegiatan/SubKegiatan";

const Router = () => {
  return (
    <>
      <Route path={"/"} component={StartOne} exact />
      <Route path={"/two"} component={StartTwo} exact />
      <Route path={"/three"} component={StartThree} exact />
      <Route path={"/home"} component={Home} exact />
      <Route path={"/kegiatan"} component={KalenderKegiatan} exact />
      <Route path={"/kegiatan/:slug"} component={SubKegiatan} exact />
    </>
  );
};
export default Router;
