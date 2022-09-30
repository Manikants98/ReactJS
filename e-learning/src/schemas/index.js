import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name Must Be At Least 2 Characters.")
    .max(25, "To Long")
    .required("Please Enter Your Name."),
  email: Yup.string()
    .email("Please Enter Valid Email.")
    .required("Please Enter Your Email."),
  password: Yup.string()
    .min(6, "Password Must Be At Least 6 Character.")
    .required("Please Enter Your Password."),
  confirm_password: Yup.string()
    .min(6, "Password Must Be At Least 6 Characters.")
    .required("Please Confirm Your Password.")
    .oneOf([Yup.ref("password"), null], "Password Not Match. "),
});

export const logInSchema = Yup.object({
  email: Yup.string()
    .email("Please Enter Valid Email.")
    .required("Please Enter Your Email."),
  password: Yup.string()
    .min(6, "Password Must Be At Least 6 Characters.")
    .required("Please Enter Your Password."),
});

export const courseSchema = Yup.object({
  heading: Yup.string().min(1).required("Please Enter Course Name"),
  category: Yup.string().min(1).required("Please Enter Course Category"),
  description: Yup.string().min(1).required("Please Enter Course Discription"),
});
