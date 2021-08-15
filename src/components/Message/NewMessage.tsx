import { ReactElement } from "react";
import { FC, memo, ReactNode } from "react";
import { Menu, Transition } from '@headlessui/react'
import p1 from "../images/p1.jpeg";
import { Link } from "react-router-dom";



interface Props {
    logo?: string;
    children: string;
}

const NewMessage: FC<Props> = ({ logo, children }) => {

    return (
        <div >
            <Menu.Item>
                <Link to={children}>
                    <button

                        className="bg-violet-500 text-white'
                                                 group flex rounded-md items-center w-full px-2 py-2 text-md font-semibold hover:text-green-700"
                    >
                        <img src={logo} alt="" className="w-8 h-8 rounded-md mx-3" />
                        {children}
                    </button>
                </Link>
            </Menu.Item>
            <hr></hr>
        </div>
    );
};

NewMessage.defaultProps = {
    children: "",
};

export default memo(NewMessage);