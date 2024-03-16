import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import SideImage from "../../components/shared/auth/SideImage";
import GoogleLogin from "../../components/shared/auth/GoogleLogin";
import Divider from "../../components/shared/auth/Divider";

const SignIn = () => {
  const [isHide, setIsHide] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
  };

  return (
    <div className="flex justify-center bg-[#000000] text-gray-50">
      <SideImage />
      <div className="min-h-screen py-8 flex flex-col justify-center items-center flex-1">
        <div className="space-y-3 text-center md:text-left lg:pr-[135px] mb-10 md:mb-12">
          <h2 className="text-4xl font-semibold ">Sign In Now!</h2>
          <p>To use EazyMart, Please enter your details.</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-6 md:gap-8 max-w-lg mx-auto"
        >
          {/* email input field */}
          <div>
            <label htmlFor="email" className="form_label">
              Email
            </label>
            <input
              type="email"
              className="input"
              id="email"
              placeholder="Type your email"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <span className="form_message">Email is required</span>
            )}
          </div>
          {/* password input field */}
          <div className="relative">
            <label htmlFor="password" className="form_label">
              Password
            </label>
            <input
              type={isHide ? "text" : "password"}
              className="input"
              id="password"
              placeholder="Type your password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 16,
                pattern:
                  /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
              })}
            />
            <p
              onClick={() => setIsHide(!isHide)}
              className={`absolute  ${
                errors.password ? "top-[45%]" : "top-[60%]"
              } right-3 cursor-pointer text-lg`}
            >
              {isHide ? <FaEyeSlash /> : <FaEye />}
            </p>
            {errors.password?.type === "required" && (
              <span className="form_message">Password is required</span>
            )}
          </div>

          <button className="button_primary w-full" type="submit">
            Sign in
          </button>
        </form>
        <p className="my-6 text-left text-sm">
          New to EazyMart?
          <Link
            to="/sign-up"
            className="hover:underline ml-1 text-primary-500 font-semibold hover:text-primary-600"
          >
            Sign up
          </Link>
        </p>
        {/* Divider */}
        <Divider />
        <div className="mt-8 max-w-xs px-4 lg:px-0 lg:max-w-[440px]  w-full">
          {/* google */}
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
