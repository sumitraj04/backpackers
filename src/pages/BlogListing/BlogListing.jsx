import { Box, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import bloglistingbg from "../../assets/images/bloglistingbg.png";
import useScreenDimensions from "../../components/Reusable/CustomHooks/useWindowDimensions";
import IndianDestCard from "../../components/Reusable/IndianDestCard/IndianDestCard";
import BlogAdCard from "../../components/Reusable/BlogAdCard/BlogAdCard"
import "./BlogListing.scss";
import Footer from "../../components/Global/Footer/Footer";
import blogbottomimg from "../../assets/images/blogbottomimg.png"
import { useDispatch, useSelector } from "react-redux";
import { getBlogListAction } from "../../reduxState/slices/BuddhaJourneySlices";

const BlogListing = () => {
  const { height } = useScreenDimensions();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getBlogListAction())
  },[])
  const stateValue = useSelector((e) => e.buddhaJourneySlice.blogList);
console.log(stateValue,"statevalue")
  return (
    <Box className="blogListingPage">
      <Box className="imageBg">
        <DrawerAppBar />
        <CardMedia
          image={bloglistingbg}
          title="backpacker"
          height={height}
          component="img"
        />
        <Box className="centerTextBox">
          <Box>
            <Typography variant="semiBoldSixtyEight">
              TRAVEL THE WORLD
            </Typography>
            <Box>
              <Typography variant="regularTwentyFour">
                AND FIND AMAZING DESTINATION
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="leftRightSpacing">
        <Box className="ourBlogsText">
          <Box>
            <Box className="bottomSpace">
              <Typography
                variant="boldFourtyEight"
                sx={{ textDecoration: "underline" }}
              >
                Our Blogs
              </Typography>
            </Box>

            <Typography variant="semiBoldTwentyFour">
              Some lorem ilpsun for the text for sub heading{" "}
            </Typography>
          </Box>
        </Box>
        <Box className="cardCssOverRiding">
          {stateValue.loading === true ?"loading content .......":
          stateValue?.blogListValue?.cardData?.map((element) => {
            return (
              <IndianDestCard
                key={element.id}
                img={element.img}
                CardHeading={element.CardHeading}
                Rating={element.Rating}
                para={element.para}
                rate={element.rate}
                isTrue={false}
              />
            );
          })}
        </Box>
        <BlogAdCard image={blogbottomimg} title="Book your desired destination now" btnTitle="Book Now"/>
      </Box>
      <Footer />
    </Box>
  );
};

export default BlogListing;
