import { FC, memo } from "react";


interface Props {
    children1?: string;
    children2?: string;
    children3?: string;
    children4?: string;
}

const Footer: React.FC<Props> = ({ children1, children2, children3, children4 }) => {
    return (
        <div className="w-96 my-10 tracking-wider">
            <h1>© 2020 All Rights Reserved. <span className="text-blue-700 font-semibold">{children1} </span>is a product of Designreset.

                <span className="text-blue-700 font-semibold">
                    {children2} , {children3} </span> and <span className="text-blue-700 font-semibold"> {children4}.
                </span></h1>
        </div >
    );
};

Footer.defaultProps = {
    children1: "CORK",
    children2: "Cookie Preferences",
    children3: "Privacy",
    children4: "Terms",
};

export default memo(Footer);