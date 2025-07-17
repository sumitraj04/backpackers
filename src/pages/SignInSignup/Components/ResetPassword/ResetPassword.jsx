import React from "react";
import "./ResetPassword.scss";
import SignInSignup from "../../SignInSignup";
import { MyInput } from "../../../../components/Global/MyInput/MyInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Box, Typography, Button } from "@mui/material";
const ResetPassword = () => {
  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain at least one uppercase, one lowercase, one digit, and one special character"
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  return (
    <Box className="resetBlock">
      <Box className="leftPicBlock">
        <SignInSignup />
      </Box>
      <Box className="signup">
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="innerSignup">
            <Box className="createText">
              <Typography variant="boldFourty">Reset Password</Typography>
            </Box>
            <Box className="letStarted">
              <Typography variant="regularTwentyFour">
                We have send the link on your registered email address to reset
                password
              </Typography>
            </Box>

            <Box>
              <MyInput
                id="password"
                name="password"
                label="Enter New Password"
                variant="filled"
                type="password"
              />
            </Box>
            <Box>
              <MyInput
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm New Password"
                variant="filled"
                type="confirmPassword"
              />
            </Box>

            <Box>
              <Button variant="contained" className="createBtn" type="submit">
                Reset Password
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default ResetPassword;
