import { Outlet } from "react-router-dom";
import Header from "../utilities/Header/Header";
import Footer from "../utilities/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
