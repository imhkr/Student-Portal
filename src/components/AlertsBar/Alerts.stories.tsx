import AlertsBar from "./AlertsBar";
import "../../index.css"
import { Children } from "react";
interface props {

}
const xyz = {
    title: "Alerts",
    component: AlertsBar
}
export const main = (args: any) => <AlertsBar{...args} ></AlertsBar>

main.args = {
    children: "Primary!",
}

export default xyz;
