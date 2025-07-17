import React from "react";
import "./BlogAdCard.scss";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import blogbottomimg from "../../../assets/images/blogbottomimg.png"
const BlogAdCard = (props) => {
  const { title, btnTitle, image } = props;
  return (
    <Box className="BlogAdCard">
      <Box className="image_wrapper">
        <CardMedia component="img" image={image} />
        <Box className="center_text">
          <Box>
            <Typography variant="semiBoldSixtyEight">{title}</Typography>
            <Box className="topMargin">
              <Button className="bookNow" variant="formButton">
                {btnTitle}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
BlogAdCard.defaultProps = { 
  image: blogbottomimg,
  title: "Book your desired destination now", 
  btnTitle: "Book Now"
} 
export default BlogAdCard;
