import { FC, memo, ReactElement } from "react";
import { Fragment } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  lead: string;
  icon: ReactElement;
}

const SideBarSingle: FC<Props> = ({ lead, icon }) => {
  return (
    <div>
      <Menu as="div" className="flex-col py-1">
        <div>
          <Menu.Button className="relative flex  py-3 hover:bg-white rounded-md  cursor-pointer px-3">
            <div className="w-6 h-6 text-green-600 ml-2">{icon}</div>
            <h1>{lead}</h1>
            <BsChevronDown className=" my-auto text-black mx-3" />
          </Menu.Button>
        </div>
      </Menu>
    </div>
  );
};

SideBarSingle.defaultProps = {};

export default memo(SideBarSingle);
