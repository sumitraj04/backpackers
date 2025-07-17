import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import "./TextOverImage.scss";
const TextOverImage = (props) => {
  const {pageHeading,paraOne,dateData,img}=props;
  return (
    <Box className="textOverImageBlock">
      <Box className="imageBg">
        <CardMedia
          image={img}
          title="backpacker"
          height={579}
          component="img"
        />
        <Box className="centerTextBox">
          <Box>
            <Typography variant="boldFourtyEightWhite">{pageHeading}</Typography>
            <Box mt={2} className="readTextBlock">
              <Typography variant="regularTwentyFour">
               {paraOne}
              </Typography>
            </Box>
            <Box mt={2} >
              <Typography variant="regularTwentyFour" className="updatedDate">
              {dateData}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TextOverImage;
