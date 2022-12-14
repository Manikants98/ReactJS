import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { registerFormData } from "../mockData";
import { CustomTextField } from "../shared/CustomTextField";
import { useMutation } from "react-query";
import { registerFn } from "../services/Register";
import { Loader } from "../shared/Loader";
import { CustomButton } from "../shared/CustomButton";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = ({ setSignIn }) => {
  const { isLoading, mutate } = useMutation(registerFn);

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
     alert("Registerd User")
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
          {registerFormData.map((data) => (
            <CustomTextField
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
            Register
          </CustomButton>
        </form>
      )}
    </>
  );
};

export default SignUp;
