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
  const groups = useAppSelector((state) => groupIdSelector(state));
  const currentGroupD = groups[Number(groupId)];
  const curentGroupId: number = +groupId;
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
