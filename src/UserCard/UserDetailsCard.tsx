import { FC, memo, ReactNode } from "react";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

interface Props {
  first_name?: string;
  last_name?: string;
  role?: string;
  profile_image_url?: string;
  index?: number;
  id?: number;
  hometown?: string;
  phone_nu?: string;
  Last_Up?: any;
  email?: string;
}

const UserDetailsCard: FC<Props> = ({
  email,
  phone_nu,
  Last_Up,
  first_name,
  last_name,
  role,
  profile_image_url,
  id,
  hometown,
}) => {
  return (
    <div>
      <div className="w-96 pt-2 mx-80 my-10 h-97 bg-userdetail  rounded-md  transform transition duration-500 hover:scale-110">
        <div className="mt-2">
          <img
            src={profile_image_url}
            className="rounded-full ml-24  mt-2 my-6"
            alt=""
          />
          <div className="ml-4 my-4 ">
            <h1 className="text-white">Id:{" " + id}</h1>
            <h1 className="text-white">Role:{" " + role}</h1>

            <h1 className="text-white">
              Name: {" " + first_name}
              {" " + last_name}
            </h1>
            <h1 className="text-white">Email:{" " + email}</h1>
            <h1 className="text-white">Contact:{" " + phone_nu}</h1>

            <h1 className="text-white">Last Updated On:{" " + Last_Up}</h1>
          </div>
        </div>
        <div className="text-white space-x-10 justify-evenly flex">
          <FiFacebook />
          <FiTwitter />
          <FiLinkedin />
        </div>
      </div>
    </div>
  );
};

UserDetailsCard.defaultProps = {};

export default memo(UserDetailsCard);
