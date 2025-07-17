import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import "./BlogFive.scss";
import Carousel from "react-multi-carousel";
import Footer from "../../components/Global/Footer/Footer";
import blogFiveImage from "../../assets/images/blogFiveImage.png";
import IndianDestCard from "../../components/Reusable/IndianDestCard/IndianDestCard";
import BlogAdCard from "../../components/Reusable/BlogAdCard/BlogAdCard";
import { blogCardData, responsiveIndianCard } from "../../Data.js";
import CenterText from "../../components/Reusable/CenterText/CenterText";

const BlogFive = () => {
  return (
    <Box>
      <Box className="blogFiveBlock">
        <DrawerAppBar />
        <Box className="titleWrapper">
          <Typography
            variant="boldFourtyEight"
            color="secondary"
            className="title"
          >
            Lorem Ipsum is simply dummy text of the printing
          </Typography>
        </Box>
        <Box className="paraOne">
          <Typography variant="semiBoldTwentyFour">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
        <Box>
          <CardMedia
            image={blogFiveImage}
            title="backpacker"
            // height={height}
            component="img"
          />
        </Box>
        <Box className="paraTwo">
          <Typography variant="semiBoldTwentyFour">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Typography>
        </Box>
        <Box>
          <Typography variant="semiBoldTwentyFour">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur,
          </Typography>
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

export default BlogFive;
