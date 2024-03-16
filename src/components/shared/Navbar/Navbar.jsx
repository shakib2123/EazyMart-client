import { Link } from "react-router-dom";
import Image from "/logo-text.png";
const Navbar = () => {
  return (
    <section className="shadow-md bg-[#081621]">
      <div className="max-w-7xl mx-auto px-2 py-3 hidden lg:flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={Image} alt="logo-text" className="object-cover w-52" />
          </Link>
          
        </div>
              <div>
                  
        </div>
        <div>buttons</div>
      </div>
    </section>
  );
};

export default Navbar;
