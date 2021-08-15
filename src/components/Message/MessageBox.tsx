import { FC, memo, ReactNode, Fragment, Children } from "react";
import { Menu, Transition } from "@headlessui/react";
import p1 from "../../images/p1.jpeg";
import { FiMail } from "react-icons/fi";
import { ReactElement } from "react";
import NewMessage from "./NewMessage";

interface Props {}

const MessageBox: FC<Props> = (props) => {
  return (
    <div>
      <div className="w-56 z-50 relative">
        <Menu as="div" className="inline-block absolute -right-52">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white   outline-none ">
              <FiMail className="w-10 h-8 " />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-3 w-52 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="absolute z-50 bg-white h-4 w-6 right-4 -top-3"
                style={{
                  clipPath: "polygon(45% 0%, 0% 90%, 90% 80%)",
                }}
              ></div>
              <div className="px-1 py-1 ">
                <NewMessage children="Teacher 1" logo={p1} />
                <NewMessage children="Teacher 2" logo={p1} />
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

MessageBox.defaultProps = {};

export default memo(MessageBox);
