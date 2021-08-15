import AvatarInfo from "../AvatarInfo/AvatarInfo";
import { FC, memo, ReactElement } from "react";


interface Props {
    people: string[];
}

const StackAvatar: React.FC<Props> = ({ people }) => {
    const UserExtra = people.length > 4;
    const NumberUsers = UserExtra && (people.length - 4);

    return (
        <div className="m-10 ml-20 flex">
            {people.slice(0, 4).map((item) => (
                <div>
                    <AvatarInfo src={item}
                        className="ml-4" />
                </div>
            ))}


            {UserExtra && (
                <span className=" mt-6 text-blue-600  font-semibold w-24 h-10 text-md rounded-full bg-gray-100 border-4 border-white -ml-2"><h4 className="h-4 text-lg">+ {NumberUsers} more</h4></span>
            )
            }
        </div>
    );
};

StackAvatar.defaultProps = {
};

export default memo(StackAvatar);