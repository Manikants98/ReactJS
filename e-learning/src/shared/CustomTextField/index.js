import React from "react";
import TextField from "@mui/material/TextField";

export const CustomTextField = ({ label, type, name, id, formik }) => {
  return (
    <>
      <TextField
        className="w-1/2 !m-3"
        label={label}
        type={type}
        name={name}
        size="small"
        id={id}
        autoComplete="off"
        value={formik.values[id]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors[id] && formik.touched[id] ? true : false}
        helperText={formik.touched[id] && formik.errors[id]}
      />
    </>
  );
};

export const LogInTextField = ({ label, type, name, id, formik }) => {
  return (
    <>
      <TextField
        className="w-1/2 !m-3"
        label={label}
        type={type}
        name={name}
        size="small"
        id={id}
        autoComplete="off"
        value={formik.values[id]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors[id] && formik.touched[id] ? true : false}
        helperText={formik.touched[id] && formik.errors[id]}
      />
    </>
  );
};

export const CreateCourseTextField = ({placeholder, type, name, id, formik }) => {
  return (
    <>
      <TextField
        className="!m-2 !border-2 !w-1/2 !rounded !outline-none"
        placeholder={placeholder}
        type={type}
        name={name}
        size="small"
        color="success"
        id={id}
        autoComplete="off"
        value={formik.values[id]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors[id] && formik.touched[id] ? true : false}
        helperText={formik.touched[id] && formik.errors[id]}
      />
    </>
  );
};
