import { Box, CardMedia, Typography} from "@mui/material";
import React from "react";
import "./TourSelectedCard.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";
const TourSelectedCard = (props) => {
  const {headingName,img}=props;
  return (
    <Box className="tourSelectedBox">
      <CardMedia
        image={img}
        title="backpacker"
        //   height={height}
        component="img"
      />
      <Box className="placeNameAndButton">
        <Box>
          <Typography variant="boldSixtyEight">{headingName}</Typography>
        </Box>
        <Box className="leftRightButton">
          <Box  className="leftButton">
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
    </Box>
  );
};

export default TourSelectedCard;
