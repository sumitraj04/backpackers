import React from "react";
import { TextField, Box } from "@mui/material";
import { useField } from "formik";
import * as Yup from "yup";
import "./MyInput.scss";

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField {...field} {...props} className="inputWidth"  variant="filled" label={label}/>
      {meta.touched && meta.error ? (
        <Box className="error">{meta.error}</Box>
      ) : null}
    </>
  );
};

// Define a validation schema outside of the component
const validationSchema = Yup.object({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    "Password must contain at least one uppercase,one lowercase, one digit, and one special character"
  ),
});

export { MyInput, validationSchema };
