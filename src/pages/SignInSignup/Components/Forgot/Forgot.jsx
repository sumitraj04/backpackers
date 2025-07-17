import { Box, Typography, Button } from "@mui/material";
import React from "react";
import SignInSignup from "../../SignInSignup";
import * as Yup from "yup";
import "./Forgot.scss";
import { MyInput } from "../../../../components/Global/MyInput/MyInput";
import { Form, Formik } from "formik";
const Forgot = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
  });
  return (
    <Box className="forgotblock">
      <Box className="leftPicBlock">
        <SignInSignup />
      </Box>
      <Box className="signup">
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="innerSignup">
            <Box className="createText">
              <Typography variant="boldFourty">Forgot Password</Typography>
            </Box>
            <Box className="letStarted">
              <Typography variant="regularTwentyFour" color="primary">
                Not to worry!
              </Typography>
            </Box>
            <Box className="alreadyMember">
              <Typography variant="regular" sx={{ color: "#fff" }}>
                Just Enter your registered Email account to continue.
              </Typography>{" "}
            </Box>
            <Box>
              <MyInput id="email" name="email" label="Email" variant="filled" />
            </Box>
            <Box>
              <Button variant="contained" className="createBtn" type="submit">
                Submit
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default Forgot;
