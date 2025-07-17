import React, { useState } from "react";
import "./AddNewDestination.scss";
import { Box, Typography } from "@mui/material";
import HelpForm from "../../../../components/Reusable/HelpForm/HelpForm";
const AddNewDestination = () => {
  const [show, setShow] = useState(false);

  return (
    <Box>
      <Box className="newDestinationBlock">
        <Box className="newDestinationAdd" onClick={() => setShow(!show)}>
          <Typography variant="boldSixteen" sx={{ color: "#fff" }}>
            Add New Destination
          </Typography>
        </Box>
      </Box>
      {show && (
        <HelpForm
          mainHeading="Suggestions"
          subHeading="Your feedback will help us update."
          firstInputName="Destination Name"
          mail="Email Address"
          mobile="Mobile no."
          comments="Any other Feedback"
        />
      )}
    </Box>
  );
};

export default AddNewDestination;
