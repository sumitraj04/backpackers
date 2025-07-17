import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import "./HelpForm.scss";
const HelpForm = (props) => {
  const {mainHeading,subHeading,firstInputName,mail,mobile,comments}=props;

  return (
    <Box className="helpForm">
      <Box className="headingSection">
        <Box>
          <Typography variant="boldSixteen" sx={{ color: "#fff" }}>
            {mainHeading}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subText" sx={{ color: "#fff" }}>
            {subHeading}
          </Typography>
        </Box>
      </Box>
      <Box className="textFieldSection">
        <Box className="textFieldInnerBox">
          <Box>
            <Typography>{firstInputName}</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="supportTextFiled"
            />
          </Box>
          <Box mt={2}>
            <Typography>{mail}</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="supportTextFiled"
            />
          </Box>
          <Box mt={2}>
            <Typography>{mobile}</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="supportTextFiled"
            />
          </Box>
          <Box mt={2}>
            <Typography>{comments}</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              multiline
              rows={5}
              maxRows={6}
              className="supportTextFiled"
            />
          </Box>
          <Box mt={2}>
            <Button variant="contained"> Sumbit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HelpForm;
