import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import "./FeatureCard.scss";
import { featureCardData } from "../../../Data";

const FeatureCard = () => {
  return (
    <Box className="featureCardBlock">
      {featureCardData.map((element) => {
          const {id,img,heading,para} = element;
        return (
          <Box key={id}>
              <Box className="innerPadding">
              <Box className="innerImg">
              <CardMedia
                image={img}
                title="backpacker"
                className="image"
                component="img"
              />
            </Box>
            <Box className="textBlock">
              <Box mb={1.3} mt={1.3}>
                <Typography variant="footerHead" color="primary">
                 {heading}
                </Typography>
              </Box>

              <Typography>
              {para}
              </Typography>
            </Box>
              </Box>
           
          </Box>
        );
      })}
    </Box>
  );
};

export default FeatureCard;
