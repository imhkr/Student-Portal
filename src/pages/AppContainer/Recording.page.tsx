import { FC, memo } from "react";
import { Link } from "react-router-dom";
import DashboardPage from "./Dashboard.page";

interface Props { }

const Recording: FC<Props> = (props) => {

    return (
        <div >
            <h1>
                This is Recording Page </h1>
            <Link to="/dashboard"><span className="text-red-700 ">Go To Dashboard</span>
            </Link>
            <DashboardPage />
        </div>
    );
};

Recording.defaultProps = {};

export default memo(Recording);
