import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import { registerFormData } from "../../mockData";
import { CustomTextField } from "../../shared/CustomTextField";
import { useMutation } from "react-query";
import { registerFn } from "../../services/Register";
import { Loader } from "../../shared/Loader";
import { CustomButton } from "../../shared/CustomButton";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = ({ setSignIn }) => {
  const { isLoading, mutate } = useMutation(registerFn);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      const reqBody = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      mutate(reqBody);
      action.resetForm();
      setSignIn(true);
      alert("Registerd User");
    },
  });
  console.log("formik.isValid", formik.isValid);
  return (
    <>
      {isLoading ? (
        <Loader show={isLoading} />
      ) : (
        <>
          <div className="flex flex-row rounded">
            <div className="w-[45%] flex flex-col h-screen text-center border-r-2 justify-center items-center">
              <img
                className="h-3/4"
                src="https://firebasestorage.googleapis.com/v0/b/myreactappmkx.appspot.com/o/register.jpg?alt=media&token=bfc50c51-24f0-453f-8340-0004ddaa0d43"
                alt=""
              />
              <h1 className="text-3xl font-bold font-serif">
                Welcome to eduVilla™
              </h1>
            </div>
            <div className="w-[55%]">
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col justify-center h-full items-center p-5 "
              >
                <h1 className="font-bold text-4xl m-3">Register </h1>

                {registerFormData.map((data) => (
                  
                  <CustomTextField
                    label={data.label}
                    type={data.type}
                    name={data.name}
                    id={data.id}
                    formik={formik}
                  />
                ))}

                <p className="text-sm w-1/2">
                  <Checkbox
                    checked={checked}
                    onClick={() => setChecked(!checked)}
                  />
                  I Agree To The Terms & Conditions.
                </p>

                <CustomButton
                  disabled={formik.isValid && checked ? false : true}
                  className="w-1/2 !m-4"
                  variant="contained"
                >
                  Register
                </CustomButton>

                <p>
                  Already Have An Account?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login Now!
                  </span>{" "}
                </p>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUp;
