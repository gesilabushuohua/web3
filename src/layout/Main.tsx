import { Outlet } from "react-router-dom";
import Head from "./head";
import Footer from "./footer";
import "./Main.scss";
const Main = () => {
  return (
    <div className="main">
      <Head/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Main;