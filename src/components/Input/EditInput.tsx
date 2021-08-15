import React from "react";
import { TiWarningOutline } from "react-icons/ti";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  labelText: string;
  errorMessage?: string;
  touched?: boolean;
}

const EditInput: React.FC<Props> = ({
  className,
  labelText,
  touched,
  errorMessage,
  ...rest
}) => {
  return (
    <div className={className + " flex flex-col"}>
      <h1 className="text-sm tracking-wider text-gray-700">{labelText}</h1>
      <input
        {...rest}
        name={rest.name}
        type={rest.type}
        placeholder={rest.placeholder}
        className="p-2 my-1  border border-gray-900 rounded-lg outline-none focus:bg-opacity-95"
      />
      {touched && (
        <div className="relative text-red-600">
          <div className="absolute flex ">
            {errorMessage && (
              <TiWarningOutline className="mt-0 w-5 h-5 -mr-2" />
            )}
            <h1 className="ml-4 w-full text-red-600 text-xs">{errorMessage}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

EditInput.defaultProps = {};

export default React.memo(EditInput);
