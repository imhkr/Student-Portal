import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userFetchOne } from "../../actions/user.actions";
import {
  currentSelectedUserSelector,
  loadingByIdUserSelector,
  UserErrorSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";
import UserDetailsCard from "../../UserCard/UserDetailsCard";
import { ImSpinner } from "react-icons/im";
import ConfirmPop from "./ConfirmPop";
import { AiOutlineRollback } from "react-icons/ai";
interface Props {}

const UserDetails: FC<Props> = (props) => {
  const profile_url = "https://picsum.photos/200";
  let userId = +useParams<{ userId: string }>().userId;
  const dispatch = useDispatch();
  const user = useAppSelector(currentSelectedUserSelector);
  const loading = useAppSelector(loadingByIdUserSelector);
  const error = useAppSelector(UserErrorSelector);
  useEffect(() => {
    dispatch(userFetchOne(userId));
  }, [userId]);
  if (loading && user == undefined) {
    return <ConfirmPop title={error} okText="Groups" cancelText="Dashboard" />;
  }
  return (
    <div>
      <div>
        {user != undefined ? (
          <UserDetailsCard
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            role={user.role}
            profile_image_url={
              user.profile_pic_url == undefined
                ? user.profile_pic_url
                : profile_url
            }
            hometown={user.hometown}
            phone_nu={user.phone_number}
            Last_Up={user.updated_at}
            email={user.email}
          />
        ) : (
          <div className="text-green-400">
            <ImSpinner className="animate-spin w-8 h-8" />
            {error}
          </div>
        )}
      </div>
      <Link to="/users">
        <AiOutlineRollback className="w-10 h-10 -mt-60 ml-28 text-gray-800" />
      </Link>
    </div>
  );
};
UserDetails.defaultProps = {};

export default memo(UserDetails);
