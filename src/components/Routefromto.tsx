import React, { ReactNode } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
    children?: string;
    dest: string;
    className?: string;

}

const Routefromto: FC<Props> = ({ dest, children, className }) => {
    return (
        <Link className={" text-blue-600 py-2 tracking-widest " + className} to={dest}>
            {children}
        </Link>
    );
};

Routefromto.defaultProps = {
    className: "",
    dest: "",
};

export default memo(Routefromto);