import { FC, memo, ReactNode } from "react";
import { Menu, Transition } from '@headlessui/react'
import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
    logo?: ReactElement;
    children: string;
    path: string;
}

const ProfileOp: FC<Props> = ({ logo, children, path }) => {

    return (
        <div >
            <Menu.Item>
                <Link to={path}>
                    <button

                        className="hover:bg-violet-500 text-white'
                                                 group flex rounded-md items-center w-full px-2 py-2 text-md font-semibold hover:text-green-700"
                    >
                        <h1 className="w-10 h-10 pt-4 pl-4">{logo} </h1>

                        {children}

                    </button>
                </Link>
            </Menu.Item>
            <hr></hr>
        </div>
    );
};

ProfileOp.defaultProps = {
    children: "",
};

export default memo(ProfileOp);