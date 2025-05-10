import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Auth from "../../hooks/useAuth";
import GoogleLogin from "../share/googleLogin/GoogleLogin";

const LoginForm = () => {
  const { accountLogin, setUser } = Auth();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, setValue, control } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    accountLogin(email, password)
      .then((result) => {
        console.log(result);
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="bg-[#f5f5f5] py-10 px-10 rounded-2xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
          <label className="block outfit text-[16px] font-medium" htmlFor="">
            Email
          </label>
          <input
            className="outfit text-[16px] font-normal border pl-[10px] w-full h-[40px] mt-1 rounded-lg"
            type="email"
            name="email"
            placeholder="Email"
            required
            {...register("email")}
          />
        </div>
        <div className="mt-5">
          <label className="block outfit text-[16px] font-medium" htmlFor="">
            Password
          </label>
          <input
            className="outfit text-[16px] font-normal border pl-[10px] w-full h-[40px] mt-1 rounded-lg"
            type="password"
            name="password"
            placeholder="Password"
            required
            {...register("password")}
          />
        </div>
        <div className="mt-2">
          <Link
            to="/reset-password"
            className="link link-hover outfit text-[17px] font-semibold text-[#1a685b] underline"
          >
            Forgot password?
          </Link>
        </div>
        <button className="btn btn-neutral bg-[#1a685b] border-0 mt-4 w-full">
          Login
        </button>
      </form>
      <GoogleLogin />
      <div className="text-center mt-8">
        <p className="jost text-[16px] font-normal ">
          You have a account .{" "}
          <Link
            to="/register"
            className="jost text-[18px] font-bold text-[#1a685b]"
          >
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
