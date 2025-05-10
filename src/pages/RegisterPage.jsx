import React from "react";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="py-20 mt-[150px]">
      <div className="container">
        <div className="w-[900px] mx-auto">
          <div className="grid grid-cols-2 gap-[40px]">
            <RegisterForm />
            <div className="text-center mt-[100px]">
              <h3 className="young_serif text-[35px] font-semibold">
                Register Now
              </h3>
              <p className="jost text-[16px] font-normal mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente veritatis non ad et quisquam obcaecati iure tenetur
                aspernatur maiores ducimus? Nam accusantium voluptate recusandae
                delectus numquam necessitatibus? Labore, deleniti
                exercitationem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
