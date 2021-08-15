import { FC, memo } from "react";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import Herosvg from "../../images/hero.svg";
import MessageBox from "../Message/MessageBox";
import Notifications from "../Notifications/Notifications";
import Profile from "../Profile/Profile";

interface Props {}

const Navbar: FC<Props> = (props) => {
  return (
    <nav className="py-2 px-8 w-screen flex items-center justify-between shadow-xs bg-gray-900">
      <div className="flex items-center space-x-3 ">
        <img src={Herosvg} alt="" className="w-10 h-10" />
        <Link to="/dashboard">
          <div className=" text-xl text-white hidden md:flex bg-clip-text text-transparent font-semibold">
            Student Portal
          </div>
        </Link>
      </div>
      <span className="lg:w-80 md:w-64 ml-4 md:hidden lg:block h-10 bg-gray-800  border border-gray-800  text-sm rounded-md flex outline-gray-800">
        <input
          type="search"
          name="search"
          placeholder="Type To Search..."
          className="flex-grow lg:pl-4 lg:mt-2 lg:ml-10 rounded-l-md rounded-r-md text-sm outline-none bg-gray-800"
        ></input>
        <HiSearch className="m-2 mr-2 lg:-mt-6 lg:ml-68 text-gray-700 w-8 h-8 items-center mt-1 hover:text-purple-700" />
      </span>
      <div className="flex">
        <MessageBox />
        <Notifications />
        <Profile />
      </div>
    </nav>
  );
};

Navbar.defaultProps = {};

export default memo(Navbar);
