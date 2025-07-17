import React, { useState } from "react";
import SignInSignup from "../../SignInSignup";
import "./VerifyEmail.scss";
import { Box, Typography, Button } from "@mui/material";
import OtpInput from "react-otp-input";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  function validateForm() {
    if (/^\d{4}$/.test(otp)) {
      setOtp(otp);
      setError("");
      console.log("otp is", otp);
    } else {
      setError("Enter a valid 4-digit PIN");
    }
  }
  return (
    <Box className="verifyBlock">
      <Box className="leftPicBlock">
        <SignInSignup />
      </Box>
      <Box className="signup">
        <Box className="innerSignup">
          <Box className="createText">
            <Typography variant="boldFourty">Verify Your Email</Typography>
          </Box>
          <Box className="letStarted">
            <Typography variant="regularTwentyFour">
              Please Enter the four digit code send to &nbsp;
            </Typography>
            <Typography variant="regularTwentyFour" color="primary">
              backpacker@gmail.com
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <OtpInput
              inputStyle="otpStyle"
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>--</span>}
              renderInput={(props) => <input {...props} />}
            />
            {error && <Box className="error">{error}</Box>}
          </Box>

          <Box>
            <Button
              variant="contained"
              className="createBtn"
              type="submit"
              onClick={() => {
                validateForm();
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VerifyEmail;
