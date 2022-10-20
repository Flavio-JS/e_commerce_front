import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./Layout.css";

const Layout = ({ customerData }) => {
  return (
    <>
      <Header customerData={customerData} />

      <div className="container page">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
