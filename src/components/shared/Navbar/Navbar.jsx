import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
const Navbar = () => {
  return (
    <section className="shadow-md bg-[#081621]">
      <div className="max-w-7xl mx-auto px-2 py-3 hidden lg:flex justify-between items-center">
        <div>
          <Logo className="max-w-44 object-cover" />
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          ;
        </div>
        <div>buttons</div>
      </div>
    </section>
  );
};

export default Navbar;
