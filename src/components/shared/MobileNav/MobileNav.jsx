import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import Image from "/logo-text.png";
const MobileNav = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowSearchBar, setIsShowSearchBar] = useState(false);
  return (
    <section className={`lg:hidden h-full`}>
      {/* Navbar */}
      <div className="z-50 h-16 bg-[#081621] flex justify-between items-center px-2 shadow-lg">
        <button
          onClick={() => setIsShow(!isShow)}
          className="p-1 text-3xl  font-extrabold text-gray-100"
        >
          {isShow ? <RxCross2 /> : <AiOutlineMenuUnfold />}
        </button>
        {/* logo */}
        <div className="max-w-32">
          <Link to="/">
            <img src={Image} alt="logo-text" className="object-cover w-full" />
          </Link>
        </div>
        {/* buttons & profile */}
        <div>
          <button
            onClick={() => setIsShowSearchBar(!isShowSearchBar)}
            className={`${
              isShowSearchBar ? "text-[#FF8C00]" : "text-gray-100"
            } text-3xl font-extrabold`}
          >
            <MdOutlineSearch />
          </button>
        </div>
      </div>
      <div
        className={`w-full h-14 absolute ${
          isShowSearchBar ? "top-16 z-50" : "-z-50 top-0"
        } drop-shadow-lg bg-gray-100 flex items-center justify-center`}
      >
        <div className="w-full min-w-[200px] h-10 px-2 flex justify-center items-center">
          <input
            className="w-full h-full bg-transparent text-gray-800 outline-none px-3 py-2.5"
            placeholder="Search here..."
          />
          <button className="text-2xl font-bold text-gray-500">
            <MdOutlineSearch />
          </button>
        </div>
      </div>

      {/* sidebar */}
      <aside
        className={`absolute z-40 mt-16 top-0 p-2  ${
          isShow ? "left-0" : "-left-80"
        } w-80  transition-all duration-300 bg-gray-100 min-h-[calc(100vh-64px)] shadow-lg flex flex-col gap-24 justify-between overflow-y-auto`}
      >
        <div className="flex justify-between items-center border-b pb-2 border-gray-400 ">
          <h2 className="text-gray-800 font-bold text-xl">Menus</h2>
          <button
            className="text-amber-600 text-2xl font-extrabold p-1.5 hover:bg-gray-300 rounded-xl"
            onClick={() => setIsShow(!isShow)}
          >
            <RxCross2 />
          </button>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
          reprehenderit corporis placeat in a debitis recusandae voluptatum
          saepe error, cumque fuga nobis illum esse unde animi tempore, labore
          dolorum culpa?
        </div>
      </aside>
    </section>
  );
};

export default MobileNav;
