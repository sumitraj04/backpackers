import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../../Global/SearchBar/SearchBar";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";
import "./ImageBg.scss";
const ImageBg = (props) => {
  const { image, headingText,placeHolder } = props;
  const { height } = useWindowDimensions();
  return (
    <Box className="ImageBg">
      <CardMedia
        image={image}
        title="backpacker"
        height={height}
        component="img"
      />
      <Box className="centerTextBox">
        <Box>
          <Typography variant="semiBoldSixtyEight">{headingText}</Typography>
          <Box className="searchBarTopMargin">
            <SearchBar placeHolder={placeHolder}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageBg;
