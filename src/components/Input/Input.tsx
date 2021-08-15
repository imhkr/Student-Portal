import { InputHTMLAttributes, ReactElement } from "react";
import { FC, memo } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    touched?: boolean;
    error?: string;
    id: string;
    icon: ReactElement;
}


const Input: FC<Props> = ({ id, touched, icon, error, className, placeholder, ...rest }) => {
    return (

        <div className="border-b border-gray-200 py-4 my-8 w-96 hover:border-indigo-500">
            <div className="flex w-full space-x-3">
                <div className={"" + className}>{icon} </div>
                <div >
                    {id && placeholder && (
                        <label htmlFor={id} className="sr-only">
                            {placeholder}
                        </label>)}
                    <input
                        id={id}
                        {...rest}
                        className="outline-none inline"
                        placeholder={placeholder}
                    />
                </div>
                {
                    touched && <div className="text-red-600 ">
                        {error}
                    </div>
                }


            </div>




        </div>

    );
}
Input.defaultProps = {};

export default memo(Input);
