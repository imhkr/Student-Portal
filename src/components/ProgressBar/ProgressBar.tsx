import { FC, memo, ReactNode } from "react";


interface Props {
    theme: "primary" | "success" | "warning";
    progressPercentage: number;
}

const ProgressBar: React.FC<Props> = ({ progressPercentage, theme }) => {

    let ProgressClass = "";
    if (theme == "primary") {
        ProgressClass = " bg-blue-600 "
    }
    if (theme == "success") {
        ProgressClass = " bg-green-500 "
    } if (theme == "warning") {
        ProgressClass = " bg-red-500 "
    }
    if (progressPercentage > 100) {
        console.error((progressPercentage) + " Is Beyond 100")
        ProgressClass = " bg-gray-800 "
    }
    if (progressPercentage < 0) {
        console.error((progressPercentage) + " Is Below 100")

    }
    return (



        <div className='m-4 h-4 w-1/2  bg-gray-300 rounded-lg'>
            <div
                style={{ width: `${progressPercentage}%` }}
                className={`h-full` + ProgressClass}>
            </div>
        </div>


    );
};

ProgressBar.defaultProps = {
    progressPercentage: 0,
};

export default memo(ProgressBar);