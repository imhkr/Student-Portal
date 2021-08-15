import React from "react";
import { IoWarningOutline } from "react-icons/io5";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    errors?: string;
    touched?: boolean;
    placeholder?: string;
    className?: string;
    icon?: any;
    errorClasses?: string;
    label?: string;
    labelClass?: string;
}

const PInput: React.FC<Props> = ({
    errors,
    touched,
    className,
    placeholder,
    icon,
    errorClasses,
    label,
    labelClass,
    ...rest
}) => {
    return (
        <div className={className + " flex flex-col"}>
            <label
                htmlFor={rest.name}
                className="text-sm font-medium tracking-wide text-gray-900"
            >
                {label}
            </label>
            <input
                {...rest}
                name={rest.name}
                type={rest.type}
                placeholder={placeholder}
                className="p-2 mt-2 border border-gray-400 rounded-lg focus:border-blue-300 focus:shadow-primary focus:outline-none"
            />
            <div className={"h-6  ml-4 " + errorClasses}>
                {touched && <span className="text-red-500 ">{errors}</span>}
            </div>
        </div>
    );
};

PInput.defaultProps = {};

export default React.memo(PInput);
