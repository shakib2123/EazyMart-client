import { Link } from "react-router-dom";
import Image from "/logo-text.png";
const Logo = ({ className }) => {
  return (
    <Link to="/">
      <img src={Image} alt="logo-text" className={className} />
    </Link>
  );
};

export default Logo;
