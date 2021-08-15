import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {}

const Dashboard: FC<Props> = () => {
  return (
    <div className="text-center mx-60 my-40 h-screen">
      <div>
        <div className="bg-white w-96 sm:ml-2 md:ml-24 h-20 ml-28 rounded-2xl shadow-lg-success-50">
          <Link to="/groups" className="cursor-pointer">
            <h1 className="text-xl -ml-4 pt-10 tracking-wider text-green-500 animate-bounce">
              <img
                src="https://image.flaticon.com/icons/png/512/1059/1059208.png"
                alt=""
                className="w-8  h-8 inline"
              />{" "}
              Click To Search Groups
            </h1>
          </Link>
        </div>
        <div className="bg-white w-96 sm:ml-2 h-20 md:ml-24 ml-28 rounded-2xl mt-3 shadow-lg-success-50">
          <Link to="/groups2" className="cursor-pointer">
            <h1 className="text-xl pt-6 tracking-wider text-green-500 animate-bounce">
              <img
                src="https://image.flaticon.com/icons/png/512/1059/1059208.png"
                alt=""
                className="w-8 mr-2 h-8 inline"
              />
              Click Submit To Search
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
