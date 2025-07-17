import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import "./BlogSeven.scss";
import Carousel from "react-multi-carousel";
import Footer from "../../components/Global/Footer/Footer";
import blogSevenLeftImg from "../../assets/images/blogSevenLeftImg.png";
import IndianDestCard from "../../components/Reusable/IndianDestCard/IndianDestCard";
import BlogAdCard from "../../components/Reusable/BlogAdCard/BlogAdCard";
import { blogCardData, responsiveIndianCard } from "../../Data.js";
import CenterText from "../../components/Reusable/CenterText/CenterText";
const BlogSeven = () => {
  return (
    <Box>
      <Box className="blogSeven">
        <DrawerAppBar />
        <Box className="imgAndText">
          <Box className="imageBlock">
            <CardMedia
              image={blogSevenLeftImg}
              title="backpacker"
              component="img"
            />
          </Box>
          <Box className="TextBlock">
            <Box className="headingBlock">
              <Typography variant="boldFourtyEightWhite" color="primary">
                Lorem Ipsum is simply dummy text of the printing
              </Typography>
            </Box>
            <Box className="paraBlock">
              <Typography color="secondary" variant="regularTwentyFour">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.release of Letraset sheets
                containing Lorem Ipsum passages
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="imgAndTextLeft">
          <Box className="imageBlock">
            <CardMedia
              image={blogSevenLeftImg}
              title="backpacker"
              component="img"
            />
          </Box>
          <Box className="TextBlock">
            <Box className="paraBlock">
              <Typography color="secondary" variant="regularTwentyFour">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and.
              </Typography>
            </Box>
            <Box className="paraBlock">
              <Typography color="secondary" variant="regularTwentyFour">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor
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
       
      </Box>
      <Footer />
    </Box>
  );
};

export default BlogSeven;
