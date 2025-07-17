import { Box, Typography } from "@mui/material";
import React from "react";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import BasicTabs from "./component/BasicTabs/BasicTabs";
import TourSelectedCard from "../../components/Reusable/TourSelectedCard/TourSelectedCard";
import "./BookingDetailPage.scss";
import Footer from "../../components/Global/Footer/Footer";
import himalaya from "../../assets/images/himalaya.png"
const BookingDetailPage = () => {
  return (
    <Box className="bookingDetailsPageBlock">
      <Box>
        <DrawerAppBar />
        <TourSelectedCard headingName="Himachal Padesh" img={himalaya}/>
      </Box>
      <Box className="leftRightMargin">
        <Box className="tourText">
          <Typography variant="boldThirtyTwo" color="secondary">
            Manali,Kasol Tour Package for Himachal Pradesh{" "}
          </Typography>
          <Typography variant="boldThirtyTwo" color="primary">
            4 days 3 Nights
          </Typography>
        </Box>
        <BasicTabs />
      </Box>
      <Footer />
    </Box>
  );
};

export default BookingDetailPage;
