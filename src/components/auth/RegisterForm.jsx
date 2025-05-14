// import { getAuth, sendEmailVerification } from "firebase/auth";
import { getAuth, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Auth from "../../hooks/useAuth";
import GoogleLogin from "../share/googleLogin/GoogleLogin";

const RegisterForm = () => {
  const auth = getAuth();
  const { createAccount } = Auth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmits = (data) => {
    const { name, email, password } = data;
    console.log(name);
    createAccount(email, password)
      .then((result) => {
        console.log(result);
        // sendEmailVerification(auth.currentUser).then(() => {
        //   console.log("verification");

        // });
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL:
            "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
        });
        reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bg-[#f5f5f5] py-10 px-10 rounded-2xl">
      <form onSubmit={handleSubmit(onSubmits)}>
        <div className="">
          <label
            className="block outfit text-[16px] font-medium"
            htmlFor="idtext"
          >
            User full Name
          </label>
          <input
            className="outfit text-[16px] font-normal border pl-[10px] w-full h-[40px] mt-1 rounded-lg"
            type="text"
            name="name"
            placeholder="user name"
            required
            {...register("name")}
          />
        </div>
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
          <a className="link link-hover outfit text-[17px] font-semibold">
            Forgot password?
          </a>
        </div>
        <button className="btn btn-neutral bg-[#1a685b] border-0 mt-4 w-full">
          Register
        </button>
      </form>
      <GoogleLogin />
      <div className="text-center mt-8">
        <p className="jost text-[16px] font-normal ">
          You have a account .{" "}
          <Link
            to="/login"
            className="jost text-[18px] font-bold text-[#1a685b]"
          >
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
