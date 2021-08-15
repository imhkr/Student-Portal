import { FC, memo, ReactNode, useState } from "react";
import { GrMenu } from "react-icons/gr";
import Features from "../Features";
import MenuDrop from "./MenuDrop";
import { sidebarActions } from "../../actions/sidebar.actions";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store";

interface Props {
  Heading: string;
  Linked1?: any;
}

const Header: FC<Props> = ({ Heading, Linked1 }) => {
  const user = useAppSelector((state) => state.user.byId[state.auth.id!]);
  const handleClick = () => {
    sidebarActions.toggleSidebar(false);
  };
  return (
    <div>
      <div className="p-3 px-8 bg-gray-50 flex justify-between flex-row">
        <div className="flex items-center ">
          <div className="mr-4">
            <button onClick={handleClick}>
              <GrMenu className="w-6 h-5 text-gray-700" cursor="pointer" />
            </button>
          </div>
          {/* <Link to="/dashboard">
            <h1 className="text-md items-center mx-3 my-auto">{Heading}</h1>
          </Link> */}
          <div className="mx-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/1200px-Emoji_u1f44b.svg.png"
              alt=""
              className="w-5 h-5 inline mr-2"
            />
            <h1 className="inline">
              Welcome{" "}
              <span className="text-green-600">
                {user.first_name + " " + user.last_name}
              </span>
            </h1>
          </div>
        </div>
        <div className="flex z-40">
          <MenuDrop title="Settings">
            <Features feature="Settings" />
            <Features feature="Mail" />
            <Features feature="Filter" />
            <Features feature="Privacy" />
          </MenuDrop>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {};

export default memo(Header);
