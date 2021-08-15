import React from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Description } from "@headlessui/react/dist/components/description/description";
import { Link } from "react-router-dom";
import { IoReloadOutline } from "react-icons/io5";
import { FaRoute } from "react-icons/fa";

interface Props {
  open?: boolean;
  title?: string;
  description?: string;
  okText?: string;
  cancelText?: string;
}
const ConfirmPop: React.FC<Props> = ({
  title,
  description,
  okText,
  cancelText,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  function closedialog() {
    setIsOpen(false);
  }

  function openDialog() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="fixed inset-0  flex  z-50 items-center justify-center"></div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto bg-gray-400"
          onClose={closedialog}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-10"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 py-14 my-8  overflow-hidden text-left align-middle transition-all transform bg-white  rounded-xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <ExclamationIcon className=" h-20 mx-auto w-1/2 mb-4 text-red-600 "></ExclamationIcon>
                  <button
                    className="w-4 h-4 absolute top-4 right-4 font-semibold "
                    onClick={closedialog}
                  >
                    <XIcon></XIcon>
                  </button>

                  {title && (
                    <h1 className="text-center my-2 text-2xl text-gray-700">
                      {title}
                    </h1>
                  )}
                </Dialog.Title>
                <div className="mt-2">
                  {description && (
                    <p className=" text-sm text-gray-500 mx-12 text-center my-8">
                      {description}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex justify-center space-x-4">
                  <Link to="/dashboard">
                    <button
                      type="button"
                      className="inline-flex justify-center px-6 py-2 text-sm   font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 shadow-lg-primary"
                      onClick={closedialog}
                    >
                      <FaRoute className="my-auto mr-2 animate-pulse" />
                      {cancelText}
                    </button>
                  </Link>
                  <Link to="/groups">
                    <button
                      onClick={closedialog}
                      type="button"
                      className="inline-flex justify-center px-8 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 shadow-lg-other"
                    >
                      <IoReloadOutline className="my-auto mx-1 animate-spin" />
                      {okText}
                    </button>
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
ConfirmPop.defaultProps = {
  open: false,
  description: "",
  title: "Are You Sure?",
  okText: "Delete",
  cancelText: "Cancel",
};
export default React.memo(ConfirmPop);
