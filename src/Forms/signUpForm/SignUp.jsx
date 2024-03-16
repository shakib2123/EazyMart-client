import { useForm } from "react-hook-form";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import { Link } from "react-router-dom";

import SideImage from "../../components/shared/auth/SideImage";
import GoogleLogin from "../../components/shared/auth/GoogleLogin";
import Divider from "../../components/shared/auth/Divider";

const SignUp = () => {
  const [isHide, setIsHide] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    console.log(name, photo, email, password);
  };

  return (
    <div className="flex justify-center bg-[#000000] text-gray-50">
      <SideImage />
      <div className="min-h-screen py-8 flex flex-col justify-center items-center flex-1">
        <div className="space-y-3 text-center md:text-left lg:pr-[135px] mb-10 md:mb-12">
          <h2 className="text-4xl font-semibold ">Sign Up Now!</h2>
          <p>To use EazyMart, Please enter your details.</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-6 md:gap-8 max-w-lg mx-auto"
        >
          {/* name input field */}
          <div>
            <label htmlFor="name" className="form_label">
              Name
            </label>
            <input
              type="text"
              className="input"
              id="name"
              placeholder="Type your name"
              {...register("name", { required: true, maxLength: 16 })}
            />
            {errors.name?.type === "required" && (
              <span className="form_message">Name is required</span>
            )}
            {errors.name?.type === "maxLength" && (
              <span className="form_message">
                Name must be less then 16 characters.
              </span>
            )}
          </div>

          {/* Photo input field */}
          <div className="">
            <label htmlFor="photo" className="form_label">
              Photo
            </label>
            <div className="relative border border-dashed bg-[#1F1F22] rounded-lg border-[#7878A3] min-w-72 lg:min-w-[450px] min-h-20 flex items-center justify-center p-4">
              <input
                type="file"
                className="opacity-0 w-full h-full z-10 absolute inset-0 cursor-pointer"
                id="photo"
                {...register("photo", { required: true })}
                accept="image/*"
              />
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <FiUploadCloud className="z-0 text-5xl text-[#5C5C7B]" />
                <span className="text-[#5C5C7B] text-lg z-0">
                  Upload a photo
                </span>
              </div>
            </div>
            {errors.photoUrl?.type === "required" && (
              <span className="form_message">Photo is required</span>
            )}
          </div>

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
            {errors.password?.type === "minLength" && (
              <span className="form_message">
                Password must be 6 characters.
              </span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="form_message">
                Password must be less then 16 characters.
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="form_message">
                Password must be have a capital letter ,<br /> a small letter
                and also have a special characters.
              </span>
            )}
          </div>

          <button className="button_primary w-full" type="submit">
            Sign up
          </button>
        </form>
        <p className="my-6 text-left text-sm">
          Already have an account?
          <Link
            to="/sign-in"
            className="hover:underline ml-1 text-primary-500 font-semibold hover:text-primary-600"
          >
            Sign In
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

export default SignUp;
