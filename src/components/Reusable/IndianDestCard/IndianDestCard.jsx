import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./IndianDestCard.scss";

export default function IndianDestCard(props) {
  const { CardHeading, Rating, days, para, rate, img,priceAndBook } = props;

  return (
    <Card className="firstCardBox">
      <Box className="firstInnerBox">
        <CardMedia className="imageBox" image={img} title="green" />
        <CardContent className="cardContent">
          <Box className="headingSection">
            <Box className="iconNname">
              <LocationOnIcon color="primary" className="rightPadding" />
              <Typography variant="cardHead">{CardHeading}</Typography>
            </Box>
            <Box className="iconNname">
              <StarRateIcon color="primary" className="rightPadding" />
              <Typography variant="cardHead">{Rating}</Typography>
            </Box>
          </Box>
          <Box className="daysText">
            <Typography variant="boldSixteen">{days}</Typography>
          </Box>
          <Typography variant="subText">{para}</Typography>
        </CardContent>

        {priceAndBook ?  <Box className="lastRow">
          <Box className="startPrice">
            <Typography variant="mediumSixteen" className="startAt">
              Starts at
            </Typography>
            <Typography variant="price">Rs. {rate}</Typography>
          </Box>
          <Box>
            <Button variant="darkNmedium">Book Now</Button>
          </Box>
        </Box> : null}

       
      </Box>
    </Card>
  );
}
