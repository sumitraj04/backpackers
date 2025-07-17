import { Box, Typography, Button, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SignInSignup from "../../SignInSignup";
import fblogo from "../../../../assets/images/fblogo.png";
import googlelogo from "../../../../assets/images/googlelogo.png";
import "./SignUp.scss";

import {
  MyInput,
  validationSchema,
} from "../../../../components/Global/MyInput/MyInput";
import { Form, Formik } from "formik";
const SignUp = () => {
  return (
    <Box className="signupBlock">
      <Box className="leftPicBlock">
        <SignInSignup />
      </Box>
      <Box className="signup">
        <Formik
          initialValues={{
            username: "",
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
              <Typography variant="boldFourty">Create an Account</Typography>
            </Box>
            <Box className="letStarted">
              <Typography variant="regularTwentyFour">
                Let’s get started
              </Typography>
            </Box>
            <Box className="alreadyMember">
              <Typography variant="regular" sx={{ color: "#fff" }}>
                Already member?
              </Typography>{" "}
              <Link to="/signin">
                <Typography variant="regular" color="primary">
                  Sign In
                </Typography>
              </Link>
            </Box>
            <Box>
              <MyInput
                id="username"
                name="username"
                label="Username"
                variant="filled"
                // className="inputWidth"
              />
            </Box>
            <Box>
              <MyInput id="email" name="email" label="Email" variant="filled" />
            </Box>
            <Box>
              <MyInput
                id="password"
                name="password"
                label="Password"
                variant="filled"
              />
            </Box>
            <Box>
              <Button variant="contained" className="createBtn" type="submit">
                Create Account
              </Button>
            </Box>
            <Box className="byClicking">
              <Typography> By clicking `</Typography>{" "}
              <Typography color="primary">create account</Typography>
              <Typography>`</Typography>{" "}
            </Box>
            <Box className="lastRowText">
              <Typography>I agree to backpacker &nbsp;</Typography>
              <Link to="/termofuse">
                <Typography color="primary">terms of use</Typography>
              </Link>
              <Typography> &nbsp;and</Typography>
              <Link to="/privacypolicy">
                {" "}
                <Typography color="primary">&nbsp; privacy policy</Typography>
              </Link>
            </Box>

            <Box className="lastRowLogo">
              <CardMedia
                component="img"
                image={fblogo}
                sx={{ marginRight: "16px" }}
                className="iconSize"
              />
              <CardMedia
                component="img"
                image={googlelogo}
                className="iconSize"
              />
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default SignUp;
