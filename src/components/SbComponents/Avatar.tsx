import { FC, memo, ReactNode } from "react";
import AvatarInfo from "../AvatarInfo/AvatarInfo";


interface Props { }

const label: React.FC<Props> = (props) => {

    return (
        <div >
            <AvatarInfo online={true} />
        </div>
    );
};

label.defaultProps = {
    children: "",
};

export default memo(label);