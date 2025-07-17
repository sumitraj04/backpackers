import React from "react";
import { Box, Typography } from "@mui/material";
import "./SignInSignup.scss";
import useWindowDimensions from "../../components/Reusable/CustomHooks/useWindowDimensions";
const SignInSignup = () => {
  const { height } = useWindowDimensions();
  console.log("height", height);
  return (
    <Box className="signinSignup" sx={{ height: `${height}px` }}>
      <Box className="textBlock">
        <Box>
          <Typography variant="boldFourtyEightWhite" sx={{ color: "white" }}>
            Keep It Special
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography className="subheadingClass">
            Capture The Best Memory In a Unique Way.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInSignup;
