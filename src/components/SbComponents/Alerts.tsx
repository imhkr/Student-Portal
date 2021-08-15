import { FC, memo } from "react";
import AlertsBar from "../AlertsBar/AlertsBar";

interface Props { }

const Alerts: React.FC<Props> = (props) => {

    return (
        <div>
            <AlertsBar theme="error2" children="Error!" />

        </div>
    );
};

Alerts.defaultProps = {
    children: "",
};

export default memo(Alerts);