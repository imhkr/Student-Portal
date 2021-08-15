import { useFormik } from "formik";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import EditInput from "../../components/Input/EditInput";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useAppSelector } from "../../store";
import { meSelector } from "../../selectors/auth.selectors";
import { BiReset } from "react-icons/bi";
import { GoCloudUpload } from "react-icons/go";
import { FaRegSave } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { updateUser } from "../../api/updateUser";
interface Props {}
const AccountSetting: React.FC<Props> = () => {
  const history = useHistory();
  const user = useAppSelector(meSelector);
  const [startingDate, setStartingDate] = useState<Date>(new Date());
  const [endingDate, setEndingDate] = useState<Date>(new Date());
  const [selectedDate, setselectedDate] = useState<Date>(new Date());
  const {
    handleReset,
    errors,
    handleSubmit,
    touched,
    getFieldProps,
  } = useFormik({
    initialValues: {
      first_name: user!.first_name,
      middle_name: user!.middle_name === null ? "" : user!.middle_name,
      last_name: user!.last_name,
      email: user?.email,
      phone_number: user!.phone_number,
      education: user!.education ? user!.education : "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required()
        .email(() => "Email is invalid"),
      first_name: yup.string().required().max(15),
      middle_name: yup.string().max(15),
      last_name: yup.string().required().max(15),
      phone_number: yup.string().required().max(100),
      education: yup.string().notRequired(),
    }),
    onSubmit: (data) => {
      updateUser(data).then((u) => {
        console.log(u);
        history.push("/dashboard");
      });
    },
  });
  return (
    <div className=" m-4 w-box ">
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <div className=" flex flex-col  py-4 bg-white border relative border-gray-300 rounded-md w-full ">
          <div className="mt-1 mb-10 md:ml-2">
            <h2 className="bg-white px-12 pb-8 text-lg tracking-wider lg:mx-2  sm:mx-72">
              General Information
            </h2>
          </div>
          <div className="flex-col relative sm:ml-80 lg:ml-4">
            <img
              src="https://wallpaperaccess.com/full/2213424.jpg"
              alt=""
              className="w-28 h-28 ml-16 rounded-md border-r-2 border-black my-auto"
            />

            <h1 className="ml-73px my-4 text-blue-600">
              {" "}
              <GoCloudUpload className="inline w-5 h-5 -ml-3 mx-1 " />
              Upload Picture
            </h1>
            <p className="lg:border-r  border-red-900 absolute left-52 h-40 -top-2"></p>
          </div>

          <div className="flex lg:absolute lg:top-20 lg:left-36 sm:flex sm:space-x-20 sm:ml-16   ">
            <EditInput
              className="lg:mt-9 lg:left-24 lg:absolute"
              labelText="First Name*"
              type="text"
              touched={touched.first_name}
              errorMessage={errors.first_name}
              placeholder="First Name"
              {...getFieldProps("first_name")}
            />
            <EditInput
              className="lg:ml-16 lg:top-9 lg:left-64 lg:absolute"
              type="text"
              labelText="Middle Name"
              touched={touched.middle_name}
              errorMessage={errors.middle_name}
              placeholder="Middle Name"
              {...getFieldProps("middle_name")}
            />
            <EditInput
              className="lg:ml-64 w-44 lg:left-99 lg:top-9 lg:absolute "
              type="text"
              labelText="Last Name*"
              touched={touched.last_name}
              errorMessage={errors.last_name}
              placeholder="Last Name"
              {...getFieldProps("last_name")}
            />
          </div>
          <div className="lg:absolute  lg:left-60  lg:top-52 sm:flex sm:space-x-12 sm:ml-16">
            <EditInput
              className=""
              type="email"
              labelText="Email*"
              touched={touched.email}
              errorMessage={errors.email}
              placeholder="Email"
              {...getFieldProps("email")}
            />

            <label
              htmlFor="Date"
              className="text-sm font-medium tracking-wide text-gray-500"
            ></label>
            <div className="lg:absolute lg:top-0 lg:left-48 sm:absolute sm:left-72">
              <h1 className="ml-4 text-md text-gray-600">Date Of Birth</h1>
              <div className="p-2 mt-2 w-42  border border-gray-400 rounded-lg focus:border-primary outline-none">
                <RiArrowDropDownLine className="top-9 z-50 w-8 h-8 right-2 absolute" />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date) => setselectedDate(date!)}
                />
              </div>
            </div>
            <EditInput
              className=" lg:top-0 lg:-right-97 lg:ml-16 lg:absolute sm:absolute sm:right-80"
              type="home"
              labelText="Phone Number*"
              touched={touched.phone_number}
              errorMessage={errors.phone_number}
              placeholder="Phone Number"
              {...getFieldProps("phone_number")}
            />
          </div>
        </div>

        <div className=" flex flex-col py-4 bg-white border relative  md:space-x-12 border-gray-300 rounded-md w-full my-4 h-56">
          <h1 className="mx-16 text-lg lg:mx-16  md:mx-96 sm:mx-80 tracking-wider">
            Info
          </h1>
          <EditInput
            className=" top-20 left-28 absolute"
            type="role"
            labelText="Role"
            // touched={touched.role}
            // errorMessage={errors.role}
            placeholder="role"
            // {...getFieldProps("role")}
          />
          <EditInput
            className=" top-20 right-56 sm:right-96 lg:right-40  absolute"
            type="updated_at"
            labelText="Last Updation On"
            // touched={touched.updated_at}
            // errorMessage={errors.updated_at}
            placeholder="Alternate_Phone"
            // {...getFieldProps("updated_at")}
          />
        </div>
        <div className="flex flex-col  py-4 bg-white border relative  border-gray-300 rounded-md w-full my-4">
          <h1 className="mx-16 text-lg md:mx-85 lg:mx-16  sm:mx-85 tracking-wider">
            EDUCATION
          </h1>
          <label
            htmlFor="button"
            className="text-blue-600 text-base mr-20 my-4"
          >
            <Button
              theme="Secondary"
              appearance="solid"
              className=" ml-98 md:mx-96 sm:mx-80 shadow-lg-primary "
              title="Add"
            ></Button>
            <EditInput
              className="lg:w-100 lg:ml-32 ml-12 sm:w-96 md:w-96 md:mx-60"
              type="education"
              labelText="Education"
              touched={touched.education}
              errorMessage={errors.education}
              placeholder="College Name"
              {...getFieldProps("education")}
            />
          </label>
          <label
            htmlFor="Starting Date"
            className="text-sm font-medium tracking-wide text-gray-500"
          ></label>
          <div className="ml-48  w-56 flex space-x-72">
            <div>
              <h1 className="text-gray-600 mx-auto">Starting Date</h1>
              <div className="p-2 mt-2 w-42  border border-gray-400 md:w-44  rounded-lg focus:border-primary outline-none">
                <DatePicker
                  selected={startingDate}
                  onChange={(date: Date) => setStartingDate(date!)}
                />
              </div>
            </div>
            <div className="md:-space-x-28">
              <h1 className="text-gray-600 md:-ml-28">Ending In</h1>
              <div className="p-2 mt-2 w-42  border border-gray-400 rounded-lg focus:border-primary outline-none">
                <DatePicker
                  selected={endingDate}
                  onChange={(date: Date) => setEndingDate(date!)}
                />
              </div>
            </div>
          </div>
          <textarea
            name="Bio"
            id="Bio"
            className="border border-gray-300 py-2 px-2 rounded-md w-3/4 md:w-96 md:ml-60 mx-auto h-3/4  my-8"
            value=""
            placeholder="Description"
          ></textarea>
        </div>
        <div className="fixed bg-profooter sm:w-full lg:w-box bottom-0 flex justify-between px-5 py-3 h-14 duration-300 ease-in-out rounded-t-md ">
          <div className="flex space-x-100 md:space-x-56 -my-2 ">
            <Button
              theme="Primary"
              appearance="solid"
              className="w-full sm:w-44 sm:ml-36 lg:ml-20 shadow-lg-secondary"
              title="Reset All"
              type="reset"
              icon={<BiReset className="-mb-5  animate-spin mx-4 w-5 h-5" />}
            ></Button>
            <Button
              theme="Success"
              appearance="solid"
              title="Save Changes"
              type="submit"
              className="w-full sm:w-44 sm:mr-36 lg:ml-64 shadow-lg-success"
              icon={<FaRegSave className="-mb-5   w-5 h-5" />}
            ></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

AccountSetting.defaultProps = {};

export default React.memo(AccountSetting);
