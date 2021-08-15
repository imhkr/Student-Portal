import { FC, memo, useEffect } from "react";
interface Props {}

const AuthHero: FC<Props> = (props) => {
  useEffect(() => {}, []);
  return (
    <div className=" h-screen w-1/2  bg-black text-white sm:hidden lg:block">
      <img
        src="../images/hero.svg"
        alt=""
        className="mx-auto w-4/5 h-4/5 mt-20"
      />
      {/* <h1>Auth Logo will be placed here</h1> */}
    </div>
  );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);
