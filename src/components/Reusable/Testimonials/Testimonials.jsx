import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import testimonial from "../../../assets/images/testimonial.png";
import doubleQuotes from "../../../assets/images/doubleQuotes.png";
import rectangle from "../../../assets/images/rectangle.png";
import "./Testimonials.scss";
const Testimonials = () => {
  return (
    <Box className="testimonialBlock">
      <Box className="whyUsText">
        <Typography variant="boldFourtyEight">
          See Why To Choose Us !
        </Typography>
      </Box>
      <Box className="imageAndText">
        <Box className="testimonialImage">
          <CardMedia image={testimonial} title="green iguana" component="img" />
        </Box>
        <Box className="testimonialText">
          <CardMedia
            className="doubleQuotes"
            image={doubleQuotes}
            title="green iguana"
            component="img"
          />
          <Box className="theText">
          <Typography variant="regular">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five.
          </Typography>
          </Box>
          <Box className="writer">
            <Box>
              {" "}
              <CardMedia
                className=""
                image={rectangle}
                title="green iguana"
                component="img"
              />
            </Box>
            <Typography variant="writerFont">Juliet Edison</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
