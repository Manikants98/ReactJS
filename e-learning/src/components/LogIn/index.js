import React from "react";
import { useFormik } from "formik";
import { logInSchema } from "../../schemas";
import { loginFormData } from "../../mockData";
import { LogInTextField } from "../../shared/CustomTextField";
import { useNavigate } from "react-router-dom";
// import Home from "../pages/Home";
import { loginFn } from "../../services/Login";
import { useMutation } from "react-query";
import { Loader } from "../../shared/Loader";
import { CustomButton } from "../../shared/CustomButton";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const LogIn = (setLogin) => {
  const { isLoading, mutate } = useMutation(loginFn, {
    onSuccess: (res) => {
      localStorage.setItem("id", res?.data[0]?.id);
    },
  });

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: logInSchema,
    onSubmit: async (values, action) => {
      const reqBody = {
        email: values.email,
        password: values.password,
      };
      mutate(reqBody);
      action.resetForm();
      setLogin(true);
      navigate("/home");
      alert("Login Succefully");
    },
  });

  return (
    <>
      {isLoading ? (
        <Loader show={isLoading} />
      ) : (
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
              <h1 className="font-bold text-4xl m-3">Login</h1>
              {loginFormData.map((data) => (
                <LogInTextField
                  label={data.label}
                  type={data.type}
                  name={data.name}
                  id={data.id}
                  formik={formik}
                />
              ))}

              <CustomButton
                type="submit"
                variant="contained"
                disabled={formik.isValid ? false : true}
                className="w-1/2 !m-4"
              >
                Log In
              </CustomButton>
              <p>
                Not Have An Account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Register Now!
                </span>{" "}
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LogIn;
