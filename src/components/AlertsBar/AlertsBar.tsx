import { FC, memo, ReactNode } from "react";
import { HiX } from "react-icons/hi";

interface Props {
    theme: "primary" | "warning" | "success" | "info" | "error1" | "error2";
    className?: string;
    children: string;
}

const AlertsBar: React.FC<Props> = ({ className, children, theme, ...rest }) => {
    let themeClasses = "";
    if (theme == "primary") {
        themeClasses = " bg-purple-200 text-purple-500";
    }
    else if (theme == "warning") {
        themeClasses = " bg-yellow-100 text-yellow-500";
    }
    else if (theme == "success") {
        themeClasses = " bg-green-100 text-green-500";
    } else if (theme == "info") {
        themeClasses = " bg-blue-100 text-blue-500";
    } else if (theme == "error1") {
        themeClasses = " bg-gray-100 text-gray-800";
    }
    else if (theme == "error2") {
        themeClasses = " bg-red-100 text-red-500";
    }

    return (
        <div className={"px-4 py-3 rounded relative w-1/2 m-auto my-6" + themeClasses + " " + className} role="alert">
            <h1 className="font-semibold inline" > {children}</h1>
            <span className="block sm:inline"> Lorem lpsum is simply dummy text of the printing.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <HiX className={"fill-current h-6 w-6  cursor-pointer" + themeClasses} />
            </span>
        </div >
    );
};

AlertsBar.defaultProps = {
    children: "Primary!",
    theme: "primary",
};

export default memo(AlertsBar);