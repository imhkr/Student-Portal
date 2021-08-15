//this will take array of features
import { FC, memo, ReactElement, Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Features from "../Features";

interface Props {
    title: string;
    children: ReactElement[];
}

const MenuDrop: FC<Props> = ({ children, title }) => {
    const [Clicked, setClicked] = useState(title);

    return (
        <div className="relative text-md">
            <Menu as="div">
                {({ open }) => (
                    <>
                        <Menu.Button className=" w-24 py-1 text-left pr-2 bg-white text-md flex justify-between items-center border border-gray-400 rounded-md">
                            <h1 className="ml-2">{Clicked}</h1>
                            {!open ? (
                                <HiChevronUp
                                    className="w-5 h-5 duration-100 transform rotate-180 "
                                    style={{
                                        transform: `rotateZ(${180}deg)`,
                                    }}
                                />) : (
                                <HiChevronDown
                                    className="w-5 h-5 duration-100 transform rotate-left-180 "
                                    style={{
                                        transform: `rotateZ(${180}deg)`,
                                    }}
                                />
                            )
                            }
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition-all duration-100 ease-out"
                            enterFrom="transform ease-in-out"
                            enterTo="transform"
                            leave="transition ease-in duration-100"
                            leaveFrom="transform opacity-100 scale-200"
                            leaveTo="transform opacity-0 "
                        >
                            <Menu.Items className=" text-white py-2 flex flex-col transform border border-gray-300 bg-white w-28 absolute mt-1 pl-2 -left-8 rounded-md">
                                {children.map((feat) => (
                                    <Menu.Item as={Fragment}>
                                        {({ active }) => {
                                            return (
                                                <a
                                                    href="#"
                                                    className={`${active && "text-blue-500 bg-white outline-none hover:text-green-600"} px-2 py-2 `}
                                                    onPointerOver={() => {
                                                        setClicked(feat.props.feature);
                                                    }}
                                                >
                                                    {feat.props.feature}
                                                </a>
                                            );
                                        }}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
};

MenuDrop.defaultProps = {

};

export default memo(MenuDrop);