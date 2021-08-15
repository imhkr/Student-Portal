import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    // disable: boolean;
}

const Button: React.FC<Props> = ({ children, className, disabled, ...rest }) => {
    return (
        // <div className="flex ">

        <button disabled={disabled} {...rest}
            className={"flex  text-white  bg-blue-600 px-3  py-1 pt-2 space-x-2 rounded-md text-semibold text-sm  hover:bg-blue-700 shadow-2xl" + className}>
            {children}
        </button >
        /* </div> */
    );
};

Button.defaultProps = {
    children: "",
};

export default memo(Button);







