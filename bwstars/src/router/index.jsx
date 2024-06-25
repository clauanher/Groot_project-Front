import { createBrowserRouter } from "react-router-dom";

import Root from "../Layout/root";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Profile from "../pages/Profile/Profile";
import Stars from "../pages/Stars/Stars"
import LoginCard from "../pages/Login/Login";
import Constellations from "../pages/Constellations/Constellations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginCard />,
  },
  {
    path: "dashboard",
    element: <Root />,
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      { path: "profile", element: <Profile /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "stars", element: <Stars /> },
      { path: "constellations", element: <Constellations /> },
    ],
  },
]);

export default router