import { FC, memo, ReactNode } from "react";
import { Menu, Transition } from '@headlessui/react'

interface Props {
    logo?: string;
    children: string;
}

const NewNoti: FC<Props> = ({ logo, children }) => {

    return (
        <div >
            <Menu.Item>
                <button

                    className="bg-violet-500 text-white'
                                                 group flex rounded-md items-center w-full px-2 py-2 text-md font-semibold hover:text-green-700"
                >
                    <img src={logo} alt="" className="w-8 h-8 rounded-md mx-3" />
                    {children}
                </button>
            </Menu.Item>
            <hr></hr>
        </div>
    );
};

NewNoti.defaultProps = {
    children: "",
};

export default memo(NewNoti);