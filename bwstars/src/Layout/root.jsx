import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer";
import "./root.css"

const Root = () => {
  return (
    <div class="layoutContainer">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;