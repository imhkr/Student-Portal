import { FC, memo, useState } from "react";
import { HiSearch } from "react-icons/hi";
import ListCard from "../../components/ListCard/ListCard";
import { useDispatch } from "react-redux";
import { GiSpinningBlades } from "react-icons/gi";
import { useAppSelector } from "../../store";
import { fetchOneGroup, groupQueryChange } from "../../actions/group.actions";
import {
  GroupsResultSelector,
  groupQuerySelector,
  groupLoadingSelector,
} from "../../selectors/groups.selectors";
import { Link } from "react-router-dom";
import ConfirmPop from "../AppContainer/ConfirmPop";
import Button from "../../components/Button/Button";
interface Props {}

const OnChangeGroup: FC<Props> = (props) => {
  const [notfound, setNotFound] = useState(false);
  const dispatch = useDispatch();
  // const query = useAppSelector(groupQuerySelector);

  const groups = useAppSelector(GroupsResultSelector);
  const loading = useAppSelector(groupLoadingSelector);

  return (
    <div className="ml-96 h-screen z-50">
      <div className="relative mt-24">
        <span className="w-80 mb-10 ml-2 h-10 bg-gray-800  border border-gray-800  text-sm rounded-md flex outline-gray-800">
          <input
            id="input"
            type="text"
            onChange={(e) => {
              dispatch(groupQueryChange(e.target.value));
              setNotFound(true);
            }}
            name="search"
            placeholder="Type To Search..."
            className="flex-grow pl-4 rounded-l-md rounded-r-md text-sm outline-none bg-gray-800 text-white"
          ></input>
          {
            <HiSearch className="m-2 mr-2  text-gray-700 w-8 h-8 items-center mt-1 hover:text-purple-700" />
          }
        </span>

        <div>
          {loading && (
            // <GiSpinningBlades className="w-12 h-12 mx-auto animate-spin ml-32 text-green-800 my-4" />
            <img
              src="https://image.flaticon.com/icons/png/512/1665/1665733.png"
              className="w-12 mx-auto h-12 animate-spin"
            ></img>
          )}
          {groups.map((item, index) => {
            return (
              <div>
                <Link
                  onClick={() => {
                    dispatch(fetchOneGroup(item.id!));
                  }}
                  to={"/groups/" + item.id}
                >
                  <ListCard
                    key={index}
                    index={index}
                    name={item.name}
                    description={item.description}
                  />
                </Link>
              </div>
            );
          })}

          {notfound && !loading && groups.length === 0 && (
            <ConfirmPop
              title=" NO GROUP FOUND ! PLEASE TYPE AGAIN"
              cancelText="Dashboard"
              okText="Retry"
            />
          )}
        </div>
      </div>
    </div>
  );
};

OnChangeGroup.defaultProps = {
  children: "",
};

export default memo(OnChangeGroup);
