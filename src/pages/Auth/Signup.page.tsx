import { FC, memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { FiUser } from "react-icons/fi";
import Input from "../../components/Input/Input";
import { HiAtSymbol, HiLockClosed } from "react-icons/hi";
import { Switch } from "antd";
import Button from "../../components/SbComponents/Button";
import { FaSpinner } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

interface Props {}

const SignUp: FC<Props> = (props) => {
  const [isPasswordshown, setisPasswordshown] = useState(false);

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
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required().min(4),
      email: yup.string().required().email(),
      password: yup.string().required().min(10),
    }),
    onSubmit: (data) => {
      console.log("Sending Data........ " + data);
      setTimeout(() => {
        history.push("/dashboard");
      }, 1000);
    },
  });
  function togglePasswordVis() {
    setisPasswordshown(!isPasswordshown);
  }
  return (
    <div className="w-1/2">
      <div className="mx-36 w-96 py-6 ">
        <div>
          <h1 className="text-4xl font-normal tracking-wider">
            Get started with a free account
          </h1>
          <h1 className="tracking-wider">
            Already have an account?
            <Link to="/login">
              <span className="text-blue-700 border-b border-blue-700 pb-0.5 tracking-wider ml-1">
                Log in
              </span>
            </Link>
          </h1>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <Input
            id="username"
            type="username"
            required
            autoComplete="username"
            {...getFieldProps("username")}
            placeholder="Username"
            touched={touched.username}
            error={errors.username}
            icon={<FiUser className="w-6 h-6 text-blue-600 " />}
          />
          <Input
            id="email"
            type="email"
            required
            autoComplete="email"
            {...getFieldProps("email")}
            placeholder="Email"
            touched={touched.email}
            error={errors.email}
            icon={<HiAtSymbol className="w-6 h-6 text-blue-600 " />}
          />
          <Input
            id="password"
            type={isPasswordshown ? "text" : "password"}
            required
            autoComplete="password"
            {...getFieldProps("password")}
            placeholder="Password"
            touched={touched.password}
            error={errors.password}
            icon={<HiLockClosed className="w-6 h-6 text-blue-600 " />}
          />
          <div className=" mt-2  mb-4">
            <div className="flex  tracking-wider">
              <label htmlFor="logeedIn">
                <input
                  type="checkbox"
                  name="logeedIn"
                  id="logeedIn"
                  className="w-6 h-4 bg-gray-600 border-gray-200 "
                />{" "}
                <span className="text-gray-400 ml-">I agree to the </span>
                <span className="text-blue-600 text-md">
                  terms and conditions{" "}
                </span>
              </label>
            </div>
          </div>
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
                <h1 className="text-white text-sm px-2 shadow-lg-secondary">
                  Getting Started!
                </h1>
              </Button>
            </div>
          </div>
          <Footer />
        </form>
      </div>
    </div>
  );
};

SignUp.defaultProps = {};

export default memo(SignUp);
