import { ImgHTMLAttributes } from "react";
import { FC, memo } from "react";


interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    online?: true | false | undefined;
    src?: string;
    className?: string;
}

const AvatarInfo: React.FC<Props> = ({ online, src, className, ...rest }) => {
    let iconClasses = "";
    if (online == false) {
        iconClasses = " bg-gray-300 ";
    }
    else if (online == true) {
        iconClasses = " bg-green-600 ";
    }
    return (
        <div className="relative inline-block">
            <img
                {...rest}
                src={src}
                className="inline object-cover  w-20 h-20 mr-2 rounded-full" alt="Profile image" />
            <span className={"absolute bottom-0 right-4 inline-block w-5 h-5   border-2 border-white rounded-full" + iconClasses}></span>
        </div >
    );
};

AvatarInfo.defaultProps = {
    online: undefined,
};

export default memo(AvatarInfo);