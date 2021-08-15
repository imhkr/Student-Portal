import { FC, memo, ReactElement } from "react";
import { Fragment } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  lead: string;
  options?: string[];
  icon: ReactElement;
}

const SideBarHelper: FC<Props> = ({ lead, options, icon }) => {
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
        <div className="flex">
          <Menu.Items className="w-40 flex  mt-2 rounded-md bg-none shadow-xl mx-auto  focus:outline-none">
            <div className="ml-8 py-2">
              {options?.map((item) => {
                return (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-gray-50  text-gray-900"
                            : "text-gray-600 text-md "
                        }  flex rounded-md items-center mx-auto py-1 md`}
                      >
                        • {item}
                      </button>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </div>
      </Menu>
    </div>
  );
};

SideBarHelper.defaultProps = {};

export default memo(SideBarHelper);
