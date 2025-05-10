import { getAuth, updateProfile } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import Auth from "./../hooks/useAuth";

const ProfilePage = () => {
  const auth = getAuth();

  const { user } = Auth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateProfile(auth.currentUser, {
      displayName: data.username,
      photoURL: data.photo,
    }).then(() => {
      alert("your profile successfully update");
    });
  };

  console.log(user?.displayName);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl text-white my-10 font-bold bg-[#19685B] p-4 rounded-2xl">
        {" "}
        User profile update{" "}
      </h1>
      <div className="card bg-[#19685B]/5 w-full max-w-2xl shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset ">
              <label className="label">User Name</label>
              <input
                {...register("username")}
                type="text"
                defaultValue={user?.displayName}
                className="input w-full"
              />
              <label className="label mt-6">Photo Url</label>
              <input
                {...register("photo")}
                type="text"
                defaultValue={user?.photoURL}
                className="input w-full"
                placeholder="Password"
              />

              <button className="btn bg-[#19685B] text-white text-lg mt-4">
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
