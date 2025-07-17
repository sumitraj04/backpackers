import { Box, Typography } from "@mui/material";
import React from "react";
import "./PackagesListing.scss";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import ImageBg from "../../components/Reusable/ImageBg/ImageBg";
import Footer from "../../components/Global/Footer/Footer";
import packagesListingBg from "../../assets/images/packagesListingBg.png";
import { indianCardData } from "../../Data";
import IndianDestCard from "../../components/Reusable/IndianDestCard/IndianDestCard";
const PackagesListing = () => {
  return (
    <Box className="packageListingBlock">
      <DrawerAppBar />
      <ImageBg
        image={packagesListingBg}
        headingText="Explore and Create Lifelong Memories"
        placeHolder="Search for your bookmarked pacakges"
      />
      <Box className="leftRightMargin">
        <Box className="tourPackagesBlock">
          <Box>
            <Typography variant="boldFourtyEight">Tour Packages</Typography>
          </Box>
          <Box>
            <Typography variant="boldTwentyEightPrimary">Bookmarked</Typography>
          </Box>
        </Box>
        <Box className="cardCssOverRiding">
          {indianCardData?.cardData.map((element) => {
            return (
              <IndianDestCard
                key={element.id}
                img={element.img}
                CardHeading={element.CardHeading}
                Rating={element.Rating}
                days={element.days}
                para={element.para}
                rate={element.rate}
                isTrue={element.isTrue}
              />
            );
          })}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default PackagesListing;
