import { FC, memo, ReactNode, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { userChangedAction } from "../../actions/user.actions";
import { User } from "../../api/updateUser";
import {
  userListSelector,
  loadingListUserSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";
import UserCard from "../../UserCard/UserCard";

interface Props {}

const UsersList: FC<Props> = (props) => {
  const profile_url =
    "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png";
  const dispatch = useDispatch();
  const users = useAppSelector(userListSelector);
  const loading = useAppSelector(loadingListUserSelector);
  useEffect(() => {
    dispatch(userChangedAction());
  }, []);
  return (
    <div>
      {loading && (
        <FaSpinner className="w-24 h-24 text-green-800  ml-96 my-44 animate-spin  " />
      )}
      <div className="flex-col">
        {users &&
          users.map((user: User) => (
            <Link to={"/users/" + user.id}>
              <UserCard
                id={user.id}
                first_name={user.first_name}
                last_name={user.last_name}
                role={user.role}
                index={user.id}
                profile_image_url={
                  user.profile_pic_url == undefined
                    ? user.profile_pic_url
                    : profile_url
                }
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

UsersList.defaultProps = {};

export default memo(UsersList);
