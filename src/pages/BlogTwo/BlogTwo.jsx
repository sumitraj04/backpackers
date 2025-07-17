import { Box, Typography, CardMedia } from "@mui/material";
import React from "react";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import "./BlogTwo.scss";
import { useSelector } from "react-redux";
import CenterText from "../../components/Reusable/CenterText/CenterText";
import BlogAdCard from "../../components/Reusable/BlogAdCard/BlogAdCard";
import IndianDestCard from "../../components/Reusable/IndianDestCard/IndianDestCard";
import Carousel from "react-multi-carousel";
import Footer from "../../components/Global/Footer/Footer";
import { blogCardData, responsiveIndianCard } from "../../Data.js";
const BlogTwo = () => {
  const stateValue = useSelector(
    (e) => e.buddhaJourneySlice.blogList.blogListValue.cardData[1]
  );
  return (
    <Box className="blogTwoBlock">
      <DrawerAppBar />
      <Box className="imgAndText">
        <Box className="imageBlock">
          <CardMedia
            image={stateValue.firstImage}
            title="backpacker"
            component="img"
          />
        </Box>
        <Box className="TextBlock">
          <Box className="headingBlock">
            <Typography variant="boldFourtyEightWhite" color="primary">
              {stateValue.blogHeading}
            </Typography>
          </Box>
          <Box className="paraBlock">
            <Typography color="secondary" variant="regularTwentyFour">
              {stateValue.paraOne}
            </Typography>
            <Typography color="secondary" variant="regularTwentyFour">
              {stateValue.paraTwo}
            </Typography>
            <Typography color="secondary" variant="regularTwentyFour">
              {stateValue.paraThree}
            </Typography>
          </Box>
        </Box>

        <CenterText />
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
          <BlogAdCard />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default BlogTwo;
