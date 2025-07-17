import { Box } from "@mui/material";
import React from "react";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import TourSelectedCard from "../../components/Reusable/TourSelectedCard/TourSelectedCard";
import HolidayDestCard from "../../components/Reusable/HolidayDestCard/HolidayDestCard";
import { holidayCardData } from "../../Data";
import Heading from "../../components/Reusable/Heading/Heading";
import "./FavouritePlace.scss"
import Footer from "../../components/Global/Footer/Footer";
import favourite from "../../assets/images/favourite.svg"
export const FavouritePlace = () => {
  return (
      <>
    <Box className="favouritePlaceBlock">
      <DrawerAppBar />
      <TourSelectedCard img={favourite} headingName="Special Sport"/>
      <Box className="leftRightMargin">
      <Heading
        headingDestination={holidayCardData.title}
        subText={holidayCardData.description}
        buttonText={holidayCardData.viewMore}
        isVisibleViewLink={false}
      />
      <Box className="holidayPlaces">
        {holidayCardData?.cardData.map((element) => {
          return (
            <HolidayDestCard
              key={element.id}
              im={element.im}
              destination={element.destination}
              price={element.price}
              howerbtnText="Explore"
            />
          );
        })}
      </Box>
      </Box>
    </Box>
     <Footer/>
      </>
  );
};
