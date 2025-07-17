import "./AdditionalInfo.scss";
import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Carousel from "react-multi-carousel";
import { additionalInfoData } from "../../../../Data";
const AdditionalInfo = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 2,
    },
    desktopMini: {
      breakpoint: { max: 1600, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box className="additional">
      {additionalInfoData.map((item, index) => (
        <Box className="additionalInfo" key={index}>
          <Box mb={5}>
            <Box mb={2}>
              <Typography variant="boldThirtyTwo">About Package</Typography>
            </Box>
            <Box>
              {item?.paragraph.map((element, index) => (
                <Typography key={index} mb={1}>
                  {element}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box>
            <Box mb={5}>
              <Box mb={2}>
                <Typography variant="boldThirtyTwo">Booking Policy</Typography>
              </Box>
              <ul>
                {item?.titlePoints.map((element, index) => (
                  <li key={index}>
                    <Typography variant="regularSixteenLight">
                      {element}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
          <Box mb={5}>
            <Box mb={2}>
              <Typography variant="boldThirtyTwo">
                List of Hotels & Resorts
              </Typography>
            </Box>
            <Box className="carouselBlock">
            <Carousel responsive={responsive}>
              {item?.cardInfo.map((element, index) => (
                <Box className="listOfHotels" key={index}>
                  <CardMedia
                    component="img"
                    src={element.img}
                    className="imageOfHotels"
                  ></CardMedia>
                  <Box className="hotelNameAndRating">
                    <Box>
                      <Typography variant="regularTwentyFour" color="secondary">{element.title}</Typography>
                    </Box>
                    <Box ml={3}>
                      {(() => {
                        const arr = [];
                        for (let i = 0; i < element.rating; i++) {
                          arr.push(<StarRateIcon key={i} color="primary" />);
                        }
                        return arr;
                      })()}
                    </Box>
                  </Box>
                  <Box className="locationAndName">
                    <LocationOnIcon color="primary" />
                    <Typography ml={1} >{element.location}</Typography>
                  </Box>
                </Box>
              ))}
            </Carousel>
              </Box>
          
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AdditionalInfo;
