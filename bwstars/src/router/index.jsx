import { createBrowserRouter } from "react-router-dom";

import Root from "../Layout/root";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Stars from "../pages/Stars/Stars"
import Constellations from "../pages/Constellations/Constellations"
import LoginCard from "../pages/Login/Login";

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
      { path: "stars", element: <Stars /> },
      { path: "constellations", element: <Constellations /> },
    ],
  },
]);

export default router