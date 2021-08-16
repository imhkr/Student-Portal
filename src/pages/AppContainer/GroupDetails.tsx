import { FC, memo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../store";
import { groupIdSelector } from "../../selectors/groups.selectors";
import Button from "../../components/Button/Button";
import ConfirmPop from "../AppContainer/ConfirmPop";
import {
  fetchOneGroup,
  groupQueryChange,
  groupsSelect,
} from "../../actions/group.actions";
import { useDispatch } from "react-redux";
interface Props {}

const GroupDetails: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { groupId } = useParams<{ groupId: string }>();
  const imageNotFound = "https://picsum.photos/200";
  const creator_url =
    "data:image/jpeg;base64,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";
  const groups = useAppSelector((state) => groupIdSelector(state));
  const currentGroupD = groups[Number(groupId)];
  const curentGroupId: number = +groupId;
  const creator = currentGroupD?.creator;
  useEffect(() => {
    if (currentGroupD === undefined) {
      dispatch(fetchOneGroup(curentGroupId));
    }
  }, [curentGroupId]);

  if (!currentGroupD) {
    return (
      <div>
        <ConfirmPop
          title=" INVALID GROUP ID ! PLEASE TYPE AGAIN"
          cancelText="Dashboard"
          okText="Retry"
        />
      </div>
    );
  }
  return (
    <div>
      <div className="mx-4 relative my-20 rounded-l-lg rounded-r-xl w-box h-64 bg-cardcolor border-2 border-green-400  ">
        <div>
          <div>
            <img
              src={
                currentGroupD.group_image_url != null ||
                currentGroupD.group_image_url != undefined
                  ? imageNotFound
                  : currentGroupD.group_image_url
              }
              className="w-28 h-28 rounded-xl  mx-20 absolute top-14 "
            />
            <h1 className="mx-60 top-14 text-3xl text-green-600 absolute uppercase ">
              {currentGroupD.name}
            </h1>
          </div>
          <div>
            <div className="absolute top-28 left-60 space-x-20 text-lg ">
              <h1>GROUP ID: {currentGroupD.id}</h1>
            </div>
            <div className="absolute top-28 right-80 space-x-20 text-lg">
              <h1>Created At: {currentGroupD.created_at}</h1>
            </div>
            <div className="absolute top-40 left-60 space-x-20 text-lg">
              <h1>Description: {currentGroupD.description}</h1>
              <h3 className="text-md font-semibold text-green-800">
                Creator:{" "}
                {currentGroupD.creator?.first_name +
                  " " +
                  currentGroupD.creator?.last_name}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 relative my-20 rounded-l-lg rounded-r-xl w-box h-64 bg-cardcolor border-2 border-green-400">
        <img
          src={
            creator?.profile_pic_url != null ||
            creator?.profile_pic_url != undefined
              ? creator_url
              : creator?.profile_pic_url
          }
          className="w-28 h-28 rounded-xl  mx-20 absolute top-14 "
        />
        <div className="ml-60 mt-12 text-lg">
          <h1 className="text-green-700">
            Creator:{" " + creator?.first_name}
            {" " + creator?.last_name}
          </h1>
          <h1>Role: {" " + creator?.role}</h1>
          <h1>Email: {" " + creator?.email}</h1>
          <h1>Phone: {" " + creator?.phone_number}</h1>
        </div>
      </div>
      <Link to="/groups">
        <Button
          theme="Success"
          title="Groups Page"
          className="w-96 ml-80 text-xl"
          appearance="outline"
        ></Button>
      </Link>
    </div>
  );
};

GroupDetails.defaultProps = {
  children: "",
};

export default memo(GroupDetails);
