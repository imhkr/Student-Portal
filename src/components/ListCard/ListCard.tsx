import { FC, memo } from "react";

interface Props {
  name: string;
  description: string;
  group_image_url?: string;
  index: number;
}

const ListCard: FC<Props> = ({ name, description, group_image_url, index }) => {
  let themeClass = "";
  if (index % 2 === 0)
    themeClass = " bg-white border border-green-400 hover:bg-gray-100";
  else themeClass = " bg-gray-200 border-red-200  hover:bg-white";
  return (
    <div className="-ml-24 uppercase">
      <div className="justify-center w-full mx-auto ">
        <div
          className={
            "flex items-center  justify-center py-2 rounded-xl border-2 space-x-6 " +
            themeClass
          }
        >
          <div className="w-auto ">
            {index % 2 === 0 ? (
              <img
                className="flex  border-2 border-white w-20 h-20 ml-2 rounded-full"
                src="https://picsum.photos/100/300/?random"
              />
            ) : (
              <img
                className="flex  border-2 border-white w-20 h-20 ml-2 rounded-full "
                src="https://picsum.photos/200/300/?random"
              />
            )}
          </div>
          <div className="w-4/5">
            <p className="w-full text-xl ">{name}</p>
            <p className="w-full pb-4 text-md tracking-wider leading-tight ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ListCard.defaultProps = {};

export default memo(ListCard);
