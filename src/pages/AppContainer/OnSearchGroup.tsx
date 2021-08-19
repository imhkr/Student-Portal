import { FC, memo, useEffect, useState } from "react";
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
interface Props {}

const OnSearchGroup: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [actiondone, setActionDone] = useState(false);
  const [search, setSearch] = useState("");
  const groups = useAppSelector(GroupsResultSelector);
  const loading = useAppSelector(groupLoadingSelector);
  useEffect(() => {
    dispatch(groupQueryChange(""));
  }, []);
  return (
    <div>
      <div className="ml-96 h-full z-50">
        <div className="relative mt-24">
          <span className="w-80 mb-10   h-10 bg-gray-800  border border-gray-800  text-sm rounded-md flex outline-gray-800">
            <input
              id="input"
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
                // setNotFound(true);
              }}
              name="search"
              placeholder="Enter To Search..."
              className="flex-grow pl-4 rounded-l-md rounded-r-md text-sm outline-none bg-gray-800 text-white"
            ></input>

            <HiSearch
              className="m-2 mr-2  text-gray-700 w-8 h-8 items-center mt-1 hover:text-green-700 cursor-pointer"
              onClick={() => {
                dispatch(groupQueryChange(search));
                setActionDone(true);
              }}
            />
          </span>
          {loading ? (
            // <GiSpinningBlades className="w-12 h-12 mx-auto animate-spin ml-60 text-green-800 my-4" />
            <img
              src="https://image.flaticon.com/icons/png/512/1665/1665733.png"
              className="w-12 mx-auto h-12 animate-spin"
            ></img>
          ) : (
            ""
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
          {actiondone && !loading && groups.length === 0 && (
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

OnSearchGroup.defaultProps = {};

export default memo(OnSearchGroup);
