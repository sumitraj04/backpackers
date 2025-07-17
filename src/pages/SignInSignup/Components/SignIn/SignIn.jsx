import React from "react";
import "./SignIn.scss";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SignInSignup from "../../SignInSignup";
import {MyInput} from "../../../../components/Global/MyInput/MyInput"
import { Form, Formik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain at least one uppercase, one lowercase, one digit, and one special character"
      ),
  });
  return (
    <Box className="signInblock">
      <Box className="leftPicBlock">
        <SignInSignup />
      </Box>
      <Box className="signup">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="innerSignup">
            <Box className="createText">
              <Typography variant="boldFourty">Welcome User !</Typography>
            </Box>
            <Box className="letStarted">
              <Typography variant="regularTwentyFour">
                Login to continue.
              </Typography>
            </Box>
            <Box className="alreadyMember">
              <Typography variant="regular" sx={{ color: "#fff" }}>
                Don’t have an account?
              </Typography>{" "}
              <Link to="/signup">
                {" "}
                <Typography variant="regular" color="primary">
                  Sign Up
                </Typography>
              </Link>
            </Box>
            <Box>
              <MyInput id="email" 
              name="email" 
              label="Enter your Email Id" 
              variant="filled" />
            </Box>
            <Box>
              <MyInput
                id="password"
                name="password"
                label="Password"
                variant="filled"
              />
            </Box>
            <Box className="forgotYourPass">
              <Link to="/forgot">
                <Typography color="primary">Forgot Your Password ?</Typography>
              </Link>
            </Box>
            <Box>
            <Button variant="contained" className="createBtn" type="submit">
              Login
            </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default SignIn;
