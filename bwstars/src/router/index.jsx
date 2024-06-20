import { createBrowserRouter } from "react-router-dom";

import Root from "../components/Layout/root";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Profile from "../pages/Profile/Profile";
import Stars from "../pages/Stars/Stars"
import Constellation from "../pages/Constellations/Constellations"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      path: "/home",
      element: <Home/>},
       {path: "/profile",
      element: <Profile/>},
      {path: "/aboutUs",
      element: <AboutUs/>},
      {path: "/stars",
      element: <Stars/>},
      {path: "constellation",
      element: <Constellation/>}
  ]}
]);

export default router