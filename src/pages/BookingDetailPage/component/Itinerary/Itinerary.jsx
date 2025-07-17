import { Box, CardMedia, Typography } from "@mui/material";
// import himalaya from "../../../assets/images/himalaya.png";
import React, { useState } from "react";
import "./Itinerary.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import { itineraryData } from "../../../Data";
import { itineraryData } from "../../../../Data";
import himalaya from "../../../../assets/images/himalaya.png"
const Itinerary = () => {
  const [accordion, setActiveAccordion] = useState(-1);

  const toogleAccordion = (index) => {
    setActiveAccordion(index);
    if (accordion === index) {
      setActiveAccordion(-1);
    }
  };

  return (
    <Box className="itinaryBlock">
      <Stepper activeStep={accordion} orientation="vertical">
        {itineraryData.map((step, index) => (
          <Step
            key={index}
            className="stepStyle"
            onClick={() => toogleAccordion(index)}
          >
            <Box className="dayStyle">
              <Box>
                <Typography color="primary" variant="boldSixteen">
                  {" "}
                  Day
                </Typography>
              </Box>
              <Box ml={1}>
                <Typography color="primary"> {step.day}</Typography>
              </Box>
            </Box>
            <Box className="dayAndTitle">
              <StepLabel className="title">
                <Typography color="secondary" variant="boldSixteen">
                  {step.title}
                </Typography>
              </StepLabel>

              <Box>
                {accordion === index ? (
                  <>
                    <IconButton className="vertical">
                      <ExpandLessIcon />
                    </IconButton>
                  </>
                ) : (
                  <>
                    <IconButton className="vertical">
                      <ExpandMoreIcon />
                    </IconButton>
                  </>
                )}
              </Box>
            </Box>
            <StepContent>
              <Box className="checkInStyle">
                <Typography color="#fff"> {step.events}</Typography>
              </Box>
              <Box>
                <Typography variant="regularEighteen">
                  {step.subTitle}
                </Typography>
                <ul>
                  {step.subTitlePoints.map((element, index) => (
                    <li key={index}>
                      <Typography variant="regularSixteenLight">
                        {element}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
              <Box className="paragraphTopDownSpacing">
                {step.paragraph.map((element, index) => (
                  <Box key={index} mt={2}>
                    <Typography>{element}</Typography>
                  </Box>
                ))}
              </Box>

              <Box className="imageBlock">
                <CardMedia
                  src={himalaya}
                  component="img"
                  height="375"
                  className="Image"
                ></CardMedia>
                <Box className="buttonNextPrevious">
                  <Box className="leftButton">
                    <IconButton color="primary" aria-label="add an alarm">
                      <ArrowBackIcon />
                    </IconButton>
                  </Box>
                  <Box className="rightButton">
                    <IconButton color="primary" aria-label="add an alarm">
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Itinerary;
