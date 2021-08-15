import { FC, memo, ReactNode, Fragment, Children } from "react";
import { Menu, Transition } from '@headlessui/react'
import p1 from "../images/p1.jpeg";
import { IoIosNotificationsOutline } from "react-icons/io"
import NewNoti from "./NewNoti";
import Profile from "../Profile/Profile";
import ProfileOp from "../Profile/ProfileOp";
import { GrDocumentPdf, GrDocumentTime } from "react-icons/gr";


interface Props {
}

const Notifications: FC<Props> = (props) => {

    return (
        <div >
            <div className="w-56 relative">
                <Menu as="div" className="inline-block absolute -right-16">
                    <div>
                        <Menu.Button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white   outline-none ">
                            <IoIosNotificationsOutline className="w-10 h-8 " />
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
                        <Menu.Items className="absolute z-50 bg-white right-2 rounded-xl w-48 mt-2 focus:outline-none">
                            <div
                                className="absolute bg-white h-4 w-6 right-4 -top-3"
                                style={{
                                    clipPath: "polygon(45% 0%, 0% 90%, 90% 90%)",
                                }}
                            ></div>
                            <div className="px-1 py-1 ">
                                {/* <NewNoti children="New Assignment" />
                                <NewNoti children="Assignment Submission Due" /> */}
                                <ProfileOp children="New Assignment" logo={<GrDocumentPdf />} path="/dashboard" />
                                <ProfileOp children="Submission Due" logo={<GrDocumentTime />} path="/dashboard" />
                            </div>
                        </Menu.Items>
                    </Transition>


                </Menu>
            </div>
        </div>
    );
};

Notifications.defaultProps = {

};

export default memo(Notifications);