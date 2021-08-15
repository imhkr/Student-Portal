// import Button from "./Button";
// import "../../index.css"
// import { Children } from "react";
// import { ButtonHTMLAttributes } from "react";
// interface props {

// }
// const xyz = {
//     title: "Button",
//     component: Button
// }
// export const main = (args: any) => <Button{...args} ></Button>

// main.args = {
//     theme: "Primary",
//     children: "Primary",
//     type: "submit",
// }

// export default xyz;
import Button from "./Button";

export default {
    component: Button,
    title: "Button",
};

const Template = (args: any) => {
    return <Button {...args}></Button>;
};

export const main: any = Template.bind({});

main.args = {
    children: "Placeholder",
};

