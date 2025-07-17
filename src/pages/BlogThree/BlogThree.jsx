import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import "./BlogThree.scss";
import { useSelector } from "react-redux";
import CenterText from "../../components/Reusable/CenterText/CenterText";
import BlogAdCard from "../../components/Reusable/BlogAdCard/BlogAdCard";
import IndianDestCard from "../../components/Reusable/IndianDestCard/IndianDestCard";
import Carousel from "react-multi-carousel";
import Footer from "../../components/Global/Footer/Footer";

import { blogCardData, responsiveIndianCard } from "../../Data.js";
const BlogThree = () => {
  const stateValue = useSelector(
    (e) => e.buddhaJourneySlice.blogList.blogListValue.cardData[2]
  );
  return (
    <Box className="blogThreeBlock">
      <DrawerAppBar />
      <Box>
        <CardMedia
          image={stateValue.firstImage}
          title="backpacker"
          component="img"
        />
        <Box className="contentBlock">
          <Box className="headingBlock">
            <Box>
              <Typography variant="boldFourtyEightWhite" color="primary">
                {stateValue.blogHeading}
              </Typography>
            </Box>
          </Box>
          <Box className="imageTextBlock">
            <Box className="paraOne">
              <Typography color="secondary" variant="regularTwentyFour">
                {stateValue.paraOne}
              </Typography>
            </Box>
            <Box>
              <CardMedia
                image={stateValue.img}
                title="backpacker"
                component="img"
              />
            </Box>
            <Box className="paraTwo">
              <Typography color="secondary" variant="regularTwentyFour">
                {stateValue.paraTwo}
              </Typography>
            </Box>
            <Box>
              <Typography color="secondary" variant="regularTwentyFour">
                {stateValue.paraThree}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <CenterText/>
      <Box className="bloglistMarginBottom">
            <Carousel responsive={responsiveIndianCard}>
              {blogCardData?.cardData.map((element) => {
                return (
                  <Box>
                    <IndianDestCard
                      key={element.id}
                      img={element.img}
                      para={element.para}
                      Rating={element.Rating}
                      CardHeading={element.CardHeading}
                      isTrue={element.isTrue}
                    />
                  </Box>
                );
              })}
            </Carousel>
          </Box>
          <Box className="blogAd">
              <BlogAdCard/>
          </Box>
          <Footer/>
    </Box>
  );
};

export default BlogThree;
