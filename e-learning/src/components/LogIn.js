import React from "react";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { logInSchema } from "../schemas";
import { loginFormData } from "../mockData";
import { LogInTextField } from "../shared/CustomTextField";
// import { useNavigate } from "react-router-dom";
// import Home from "../pages/Home";
import { loginFn } from "../services/Login";
import { useMutation } from "react-query";
import { Loader } from "../shared/Loader";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const LogIn = () => {
  const { isLoading, mutate } = useMutation(loginFn);

  // const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: logInSchema,
    onSubmit: async (values, action) => {
      const reqBody = {
        email: values.email,
        password: values.password,
      };
      mutate(reqBody);
    },
  });

  return (
    <>
      {isLoading ? (
        <Loader show={isLoading} />
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col bg-white border-2 justify-center items-center p-5 shadow-md"
        >
          {loginFormData.map((data) => (
            <LogInTextField
              label={data.label}
              type={data.type}
              name={data.name}
              id={data.id}
              formik={formik}
            />
          ))}

          <Button
            type="submit"
            variant="contained"
            disabled={formik.isValid ? false : true}
            className="w-1/2 !m-4"
          >
            Log In
          </Button>
        </form>
      )}
    </>
  );
};

export default LogIn;
