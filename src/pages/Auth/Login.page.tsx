import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { HiLockClosed } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import { FcLock } from "react-icons/fc";
import Button from "../../components/SbComponents/Button";
import Routefromto from "../../components/Routefromto";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import { Switch } from "antd";
import { login } from "../../api/auth";
import { authActions } from "../../actions/auth.actions";

// import { useDispatch } from "react-redux";

interface Props {}

const Login: FC<Props> = (props) => {
  const [isPasswordshown, setisPasswordshown] = useState(false);
  // const dispatch = useDispatch();
  const history = useHistory();
  const {
    handleSubmit,
    getFieldProps,
    touched,
    isSubmitting,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(10),
    }),
    onSubmit: (data) => {
      console.log("Sending Data........" + data);
      login(data).then((u) => {
        authActions.login(u);
        history.push("/dashboard");
      });
    },
  });
  /*toggle*/
  function togglePasswordVis() {
    setisPasswordshown(!isPasswordshown);
  }
  return (
    <div className="mx-auto my-8">
      <div>
        <h1 className="font-normal text-4xl mt-4">
          Log In to <span className="text-blue-600 font-semibold ">CORK</span>
        </h1>
        <h1 className="tracking-wider mt-2 -mb-8">
          <span className="text-sm mt-20 font-semibold">New Here?</span>
          <Link to="/signup" className="text-blue-500">
            <span className="text-blue-600 font-semibold text-sm border-b ml-2 border-blue-600 ">
              Create an account
            </span>
          </Link>
        </h1>
      </div>

      <div>
        <div>
          <form className="mt-24" onSubmit={handleSubmit}>
            {/* <FiUser className="w-6 h-6 stroke-current  text-blue-600 fill-blue-500 inline mr-2" /> */}
            <Input
              id="email"
              type="email"
              required
              autoComplete="email"
              {...getFieldProps("email")}
              placeholder="Email"
              touched={touched.email}
              error={errors.email}
              icon={<FiUser className="w-6 h-6 text-blue-600 " />}
            />

            <Input
              id="password"
              type={isPasswordshown ? "text" : "password"}
              required
              autoComplete="current-password"
              touched={touched.password}
              error={errors.password}
              {...getFieldProps("password")}
              placeholder="Password"
              icon={<HiLockClosed className="w-6 h-6 text-blue-500 " />}
            />

            <div className="flex justify-between  items-center py-4">
              <div>
                <h1 className="tracking-wider">
                  Show Password{" "}
                  <Switch
                    onClick={togglePasswordVis}
                    className="w-4 fill-red  inline"
                  />
                </h1>
              </div>

              <div>
                <Button type="submit" disabled={!isValid}>
                  {isSubmitting && (
                    <FaSpinner className="inline animate-spin h-6 w-8" />
                  )}
                  {!isSubmitting && <FcLock className="inline w-8 h-6" />}
                  <h1 className="text-white shadow-lg-secondary">Log In</h1>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center  mt-10 justify-between">
              <div className="flex justify-start space-x-2">
                <input type="checkbox" name="logged in" className="w-4 h-5" />
                <span className=" text-gray-500 text-sm fill-current">
                  Keep me logged in
                </span>
              </div>
              <Routefromto
                dest="/NotFound.page"
                className=" tracking-wider font-semibold mt-3"
              >
                Forgot Password?
              </Routefromto>
            </div>
            <Footer />
          </form>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
