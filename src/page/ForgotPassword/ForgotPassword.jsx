import axios from "axios";
import background from "../../images/freetogame-image.jpg";
import logo from "../../images/logo-footer.png";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [accountExisstError, setaccountExisstError] = useState(null);
  const emailRiges =
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

  function validate(values) {
    const errors = {};

    if (values.email === "") {
      errors.email = "email is required";
    } else if (!emailRiges.test(values.email)) {
      errors.email = "email is not valid";
    }

    return errors;
  }
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: function (values) {
      senddata(values);
    },

    validate,
  });
  async function senddata(values) {
    const lodingToastId = toast.loading("waiting...");

    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        method: "POST",
        data: values,
      };
      let { data } = await axios.request(options);
      console.log(data);

      if (data.statusMsg === "success") {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/verify");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setaccountExisstError(error.response.data.message);
    } finally {
      toast.dismiss(lodingToastId);
    }
  }
  return (
    <div className=" container  mx-auto   ">
      <Helmet>
        <title> Forgot Password </title>
      </Helmet>
      <div className="  flex  h-screen items-center justify-center   ">
        <div className=" grid  w-[100%] mx-10  grid-cols-12 bg-primary-300  shadow-md shadow-primary-400">
          <div
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center`,
            }}
            className="w-full hidden md:block px-2 col-span-6 "
          ></div>
          <div className="col-span-12 md:col-span-6 my-4 px-2">
            <div className="lg:px-12 md:px-8 px-4 sm:px-10  flex items-center space-y-8 justify-center flex-col h-full">
              <div className="flex items-center  justify-center flex-col gap-2">
                <h1 className="text-gray-400 text-xl font-semibold text-center">
                  Forgot Your Password?
                </h1>
                <p className="text-center text-gray-400">
                  Just enter your email address below and we'll send you a link
                  via email to reset your password!
                </p>
              </div>
              <form
                action=""
                className=" space-y-3 w-full text-gray-200 "
                onSubmit={formik.handleSubmit}
              >
                <div className="email bg-primary-600 px-4 py-3 rounded-lg ">
                  <input
                    autoComplete="off"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full focus:outline-0 !bg-transparent focus:!bg-transparent focus:border-0 placeholder:text-gray-400"
                    name="email"
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.email && formik.touched.email && (
                  <p className="text-gray-200 font-semibold">
                    *{formik.errors.email}
                  </p>
                )}
                {accountExisstError && (
                  <p className="text-gray-200 font-semibold">
                    *{accountExisstError}
                  </p>
                )}

                <button
                  type=" submit "
                  className=" bg-primary-300 mb-0 hover:bg-primary-600 hover:transition hover:duration-300 duration-300 py-2 border-[.5px] border-primary-700  w-full rounded-lg"
                >
                  Sind Reset Instruction
                </button>

                <p className=" text-gray-300 font-normal my-4 text-center text-sm">
                  Remembered password?{" "}
                  <Link to={"/login"} className="text-blue-500">
                    Login!
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
