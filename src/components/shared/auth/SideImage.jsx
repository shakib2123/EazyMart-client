import Image from "/authentication-page-bg.jpeg";
import logo from "/logo-text.png";
const SideImage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Image})` }}
      className="flex-1 bg-cover bg-left hidden  md:block"
    >
      <div className="bg-black/70 w-full h-full backdrop-blur-sm flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="max-w-64 lg:max-w-80" />
        <h2 className="md:text-xl lg:text-3xl text-center text-gray-200 px-2 font-medium max-w-xl mx-auto">
          Create your EazyMart Account Dive into a tech world of possibilities!
        </h2>
      </div>
    </div>
  );
};

export default SideImage;
