import { Box, Typography, CardMedia } from "@mui/material";
import React from "react";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import TextOverImage from "../../components/Reusable/TextOverImage/TextOverImage";
import Footer from "../../components/Global/Footer/Footer";
import "./BlogOne.scss";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import { blogCardData, responsiveIndianCard } from "../../Data.js";
import IndianDestCard from "../../components/Reusable/IndianDestCard/IndianDestCard";
import BlogAdCard from "../../components/Reusable/BlogAdCard/BlogAdCard";
import CenterText from "../../components/Reusable/CenterText/CenterText";
const BlogOne = () => {
  const stateValue = useSelector(
    (e) => e.buddhaJourneySlice.blogList.blogListValue.cardData[0]
  );
  console.log(stateValue, "blogone");
  return (
    <Box className="blogOneBlock">
      <DrawerAppBar />

      <Box className="imgBlock">
        <Box>
          <TextOverImage
            pageHeading={stateValue.blogHeading}
            img={stateValue.firstImage}
          />
        </Box>
      </Box>
      <Box className="upperImgTexBlock">
        <Box className="textImgBlock">
          <Box mb={4} className="firstTextBlock">
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
          <Box mt={4}>
            <Typography color="secondary" variant="regularTwentyFour">
              {stateValue.paraTwo}
            </Typography>
          </Box>
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

      <Footer />
    </Box>
  );
};

export default BlogOne;
