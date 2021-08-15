import { ReactElement } from "react";
import { ButtonHTMLAttributes } from "react";
import { memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme:
    | "Primary"
    | "Info"
    | "Success"
    | "Warning"
    | "Danger"
    | "Secondary"
    | "Dark";
  title?: string;
  className?: string;
  border?: "default" | "rounded";
  appearance?: "solid" | "outline";
  icon?: ReactElement;
}

const Button: React.FC<Props> = ({
  title,
  className,
  theme,
  appearance,
  type,
  border,
  icon,
  ...rest
}) => {
  let appearanceClasses = "";
  let themeClasses = "";
  if (theme == "Primary") {
    themeClasses = " bg-blue-700 text-white hover:bg-blue-800";
    if (appearance == "outline") {
      appearanceClasses =
        "border border-blue-500 text-white-500 hover:text-white hover:bg-blue-700 hover:border-none shadow-lg";
    }
  }
  if (theme == "Info") {
    themeClasses = " bg-SkyBlue-100 text-white hover:bg-blue-700";
    if (appearance == "outline") {
      appearanceClasses =
        " border  border-SkyBlue-100 text-Skyblue-200 hover:text-white hover:bg-SkyBlue-200 hover:border-none shadow-lg";
    }
  }
  if (theme == "Success") {
    themeClasses = " bg-green-500 text-white hover:bg-green-700";
    if (appearance == "outline") {
      appearanceClasses =
        " border  border-green-500 text-green-500 hover:text-white hover:bg-green-500 hover:border-none ";
    }
  }
  if (theme == "Warning") {
    themeClasses = " bg-yellow-500 text-white hover:bg-yellow-700";
    appearanceClasses =
      " border  border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-none shadow-lg";
  }
  if (theme == "Danger") {
    themeClasses = " bg-red-500 text-white hover:bg-red-600";
    appearanceClasses =
      " border  border-red-500 text-red-500 hover:text-white hover:bg-red-500 hover:border-none shadow-lg";
  }
  if (theme == "Secondary") {
    themeClasses = " bg-purple-600 text-white hover:bg-purple-700";
    appearanceClasses =
      " border  border-purple-600 text-purple-500 hover:text-white hover:bg-purple-600 hover:border-none ";
  }
  if (theme == "Dark") {
    themeClasses = " bg-gray-700 text-white hover:bg-gray-800";
    appearanceClasses =
      " border  border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500 hover:border-none shadow-lg";
  }

  return (
    <div>
      <button
        {...rest}
        type={type}
        className={
          "h-10 px-5 m-2 transition-colors duration-150  rounded-md  shadow-lg focus:shadow-outline " +
          themeClasses +
          " " +
          " " +
          className
        }
      >
        {icon}
        {title}
      </button>
    </div>
  );
};

Button.defaultProps = {
  theme: "Primary",
  title: "",
};

export default memo(Button);
