import { FC, memo } from "react";

interface Props {
  first_name?: string;
  last_name?: string;
  role?: string;
  profile_image_url?: string;
  index?: number;
  id?: number;
}

const UserCard: FC<Props> = ({
  first_name,
  last_name,
  id,
  role,
  profile_image_url,
  index,
}) => {
  let themeClass = "";
  if (index === 0)
    themeClass = " bg-white border border-green-400 hover:bg-gray-100";
  else themeClass = " bg-gray-200 border-red-200  hover:bg-white";
  return (
    <div className="w-72 h-60 ml-48 bg-gray-800 rounded-md my-2 justify-center text-white mx-auto uppercase flex flex-col">
      <div className="justify-center w-full mx-auto ">
        <div className="w-auto ">
          <img
            className="flex  border-2  mx-auto border-white w-20 h-20 ml-24 rounded-full"
            src={profile_image_url}
          />
        </div>
        <div className="w-full ml-12">
          <p className="w-full text-lg -mb-1 text-green-300  ">{id}</p>
          <p className="w-full text-lg inline">{first_name}</p>
          <p className="w-full text-lg inline "> {" " + last_name}</p>
          <p className="w-full pb-4 text-lg font-bold tracking-wider leading-tight ">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

UserCard.defaultProps = {};

export default memo(UserCard);
