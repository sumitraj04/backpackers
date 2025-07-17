import { Box, Typography } from "@mui/material";
import React from "react";
import "./CenterText.scss";
const CenterText = (props) => {
  const { text } = props;
  return (
    <Box className="centerTextBlock">
      <Typography variant="boldFourtyEight">{text}</Typography>
    </Box>
  );
};
CenterText.defaultProps = {
  text: "More Article",
};
export default CenterText;
