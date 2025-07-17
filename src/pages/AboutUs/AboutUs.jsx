import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import "./AboutUs.scss";
import abouttopright from "../../assets/images/abouttopright.svg";
import aboutusbody from "../../assets/images/aboutusbody.svg";
import BlogAdCard from "../../components/Reusable/BlogAdCard/BlogAdCard";
import Footer from "../../components/Global/Footer/Footer";
import FeatureCard from "./component/FeatureCard";
import { aboutUsData } from "../../Data";
const AboutUs = () => {
  return (
    <>
      <Box className="aboutUsBlock">
        <DrawerAppBar />
        <Box className="topRightImage">
          <CardMedia
            image={abouttopright}
            title="backpacker"
            className="image"
            component="img"
          />
        </Box>
        <Box className="heading">
          <Box className="headingAboutUs">
            <Typography variant="boldSixtyEight" color="secondary">
              We help you to discover new places{" "}
            </Typography>
            <Typography variant="boldSixtyEight" color="primary">
              {" "}
              new places{" "}
            </Typography>
          </Box>
        </Box>
        <Box className="grpImage">
          <CardMedia
            image={aboutusbody}
            title="backpacker"
            className="bodyImage"
            component="img"
          />
        </Box>
        <Box className="leftRightSpace">
          <Box>
            <Typography variant="boldThirtyTwo" color="primary">
              {aboutUsData.pageName}
            </Typography>
          </Box>
          <Box className="paragraphBottomMargin">
            {aboutUsData.textData.map((element, index) => {
              return (
                <Box mb={2} key={index} mt={2}>
                  <Typography variant="regularEighteen">{element}</Typography>
                </Box>
              );
            })}
          </Box>

          <FeatureCard />
          {/* <BlogAdCard /> */}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AboutUs;
