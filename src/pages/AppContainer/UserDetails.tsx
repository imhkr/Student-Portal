import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { userFetchOne } from "../../actions/user.actions";
import {
  currentSelectedUserSelector,
  loadingByIdUserSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";
import UserDetailsCard from "../../UserCard/UserDetailsCard";
import { ImSpinner } from "react-icons/im";
import ConfirmPop from "./ConfirmPop";
interface Props {}

const UserDetails: FC<Props> = (props) => {
  const profile_url = "https://picsum.photos/200";
  let userId = +useParams<{ userId: string }>().userId;
  const dispatch = useDispatch();
  const user = useAppSelector(currentSelectedUserSelector);
  const loading = useAppSelector(loadingByIdUserSelector);
  useEffect(() => {
    dispatch(userFetchOne(userId));
  }, [userId]);
  if (loading && user == undefined) {
    return (
      <div className="text-green-400">
        <ImSpinner className="animate-spin w-8 h-8" />
      </div>
    );
  }
  return (
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
        <ConfirmPop
          title="Person Not Found"
          okText="Dashboard"
          cancelText="Retry"
        />
      )}
    </div>
  );
};
UserDetails.defaultProps = {};

export default memo(UserDetails);
