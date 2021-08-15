import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import SideBarHelper from "./SideBarHelper";
import { GiCornerFlag } from "react-icons/gi";
import { RiAccountBoxLine } from "react-icons/ri";
import { AiTwotoneCopy } from "react-icons/ai";
import { BsCalendar, BsPeople } from "react-icons/bs";
import { MdAssignmentInd, MdFeedback, MdHelpOutline } from "react-icons/md";
import { useAppSelector } from "../../store";
import { sidebarOpenSelector } from "../../selectors/ui.selectors";
import SideBarSingle from "./SideBarSingle";
import { FiUsers } from "react-icons/fi";
interface Props {}

const SideBar: React.FC<Props> = (props) => {
  const isSidebarOpen = useAppSelector((state) => sidebarOpenSelector(state));
  return (
    <div className=" hover:overflow-y-scroll">
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter="transform transition-transform duration-500 linear"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-450"
        leaveFrom="opacity-100 translate-y-1"
        leaveTo="opacity-0 translate-y-10"
      >
        <div
          className={
            "bg-sidebar h-full transition-colors duration-500 rounded-md ease-in-out py-4 px-3 sticky w-60  border-r-4 border-b-2 border-gray-300 text-white  hidden  lg:block"
          }
        >
          <Link to="/dashboard">
            <SideBarSingle lead="Dashboard" icon={<MdAssignmentInd />} />
          </Link>
          <Link to="/users">
            <SideBarSingle lead="Users" icon={<FiUsers />} />
          </Link>
          <SideBarHelper
            lead="Main Account"
            options={[
              "My Profile",
              "Update Resume",
              "Class Timings",
              "Training ID",
              "Batch Number",
              "Leave Request",
            ]}
            icon={<RiAccountBoxLine />}
          />
          <SideBarHelper
            lead="Assignment"
            options={["Submit Assignment", "View Assignment"]}
            icon={<AiTwotoneCopy />}
          />
          <SideBarHelper
            lead="Feedback"
            options={["View Older Feedback", "Give Feedback"]}
            icon={<MdFeedback />}
          />
          <SideBarHelper
            lead="Help Desk"
            options={["TA"]}
            icon={<MdHelpOutline />}
          />
          <SideBarHelper
            lead="Notice Corner"
            options={["Unread Notice", "Read Notice", "Create Notice"]}
            icon={<GiCornerFlag />}
          />
          <SideBarHelper
            lead="Calendar"
            options={["Trainging Calendar", "Internship Calendar"]}
            icon={<BsCalendar />}
          />
          <SideBarHelper
            lead="

Batchmates"
            options={["Batchmates List"]}
            icon={<BsPeople />}
          />
        </div>
      </Transition>
    </div>
  );
};

SideBar.defaultProps = {};

export default React.memo(SideBar);
