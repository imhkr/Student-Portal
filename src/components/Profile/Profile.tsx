import { FC, memo, ReactNode, Fragment, Children } from "react";
import { Menu, Transition } from '@headlessui/react'
import profilelogo from "../../images/profile.png";
import { FiMail } from "react-icons/fi"
import { ReactElement } from "react";
import ProfileOp from "./ProfileOp";
import { FaUser, FaRegNewspaper } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";
import { logout } from "../../api/auth";
import { useState } from "react";
import { LoggedOut } from "../../stories/Header.stories";
import { HiLogout } from "react-icons/hi";
interface Props {
}

const Profile: FC<Props> = (props) => {


    return (
        <div >
            <div className="w-56 ">
                <Menu as="div" className="inline">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white   outline-none ">
                            <img src={profilelogo} alt="" className="w-8 h-8" />
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
                        <Menu.Items className="absolute right-28 z-50 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg hover:text-green-700 focus:outline-none">
                            <div
                                className="absolute z-50 bg-white h-4 w-6 right-4 -top-3" style={{
                                    clipPath: "polygon(45% 0%, 0% 90%, 90% 80%)",
                                }}
                            ></div>
                            <div className="px-2 py-1  ">

                                <ProfileOp children="My Profile" logo={<FaUser />} path="/account/profile" />

                                <ProfileOp children="My Resume" logo={<FaRegNewspaper />} path="/account/profile" />
                                <button

                                    onClick={() => {

                                        logout();
                                        window.location.href = "/login";

                                    }}
                                >
                                    <ProfileOp children="Logout" logo={<CgLogOut />} path="/login"

                                    />


                                </button>
                            </div>
                        </Menu.Items>
                    </Transition>


                </Menu>
            </div>
        </div>
    );
};

Profile.defaultProps = {

};

export default memo(Profile);