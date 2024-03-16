import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import MobileNav from "../components/shared/MobileNav/MobileNav";

const Root = () => {
  return (
    <section>
      <Navbar />
      <MobileNav/>
      <Outlet />
    </section>
  );
};

export default Root;
