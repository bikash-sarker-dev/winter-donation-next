import React from "react";
import { useForm } from "react-hook-form";
import Auth from "./../hooks/useAuth";

const ResetPasswordPage = () => {
  const { resetPasswordForUser, setLoading } = Auth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    try {
      resetPasswordForUser(data?.email)
        .then(() => {
          console.log("password reset");
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="hero  min-h-screen container">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Reset Password for User !</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    {...register("email")}
                    type="email "
                    className="input  w-full"
                    placeholder="Email"
                  />

                  <button className="btn bg-[#1a685b] mt-4 text-white">
                    Reset Password
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
