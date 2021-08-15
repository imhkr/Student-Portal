import AvatarInfo from "./AvatarInfo";
import "../../index.css"
import { Children } from "react";
interface props {

}
const xyz = {
    title: "Avatar",
    component: AvatarInfo
}
export const main = (args: any) => <AvatarInfo{...args} ></AvatarInfo>

main.args = {
    online: undefined,
    src: "https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg",
}

export default xyz;
