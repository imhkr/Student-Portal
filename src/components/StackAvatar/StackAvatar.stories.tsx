import StackAvatar from "./StackAvatar";
import "../../index.css"
interface props {

}
const peopleURL = ["https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg",
    "https://images.generated.photos/ADbBAzeK5oWF2oDJWfZ2-Wq3TBjqex-dxZVQGD5LPJY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMzk2ODBfMDUz/NjY1Nl8wNzAxMDQ2/LmpwZw.jpg",
    "https://images.generated.photos/ADbBAzeK5oWF2oDJWfZ2-Wq3TBjqex-dxZVQGD5LPJY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMzk2ODBfMDUz/NjY1Nl8wNzAxMDQ2/LmpwZw.jpg",
    "https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg",
    "https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg",
    "https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg",
    "https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg",
    "https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg",
    "https://images.generated.photos/Z5HfwR5L8Fez5uCqEcj3SbogJgJhBdfxJs73ZRGjWgE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNzc4NzAuanBn.jpg"
];
const xyz = {
    title: "StackAvatar",
    component: StackAvatar
}
export const main = (args: any) => <StackAvatar{...args} ></StackAvatar>

main.args = {
    people: peopleURL,
};

export default xyz;
