import { Box, Typography, Link } from "@mui/material";
import React from "react";

const Heading = (props) => {
  const { headingDestination, subText, buttonText, isVisibleViewLink } = props;
  return (
    <Box mt={10} mb={2}>
      <Box>
        <Typography variant="head">{headingDestination}</Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="regular">{subText}</Typography>
      </Box>
      {isVisibleViewLink ? (
        <Box sx={{ display: "flex", flexDirection: "row-reverse",pr:1}}>
          <Link sx={{textDecoration:"none"}}>{buttonText}</Link>
        </Box>
        
      ) : null}
    </Box>
  );
};

export default Heading;
