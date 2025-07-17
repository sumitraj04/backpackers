import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import "./HolidayDestCard.scss";

const HolidayDestCard = (props) => {
  const { im, destination, price,howerbtnText } = props;
  console.log(howerbtnText,"howerbtnText")
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Box
      className="holidayDestination"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img className="avatar" src={im} alt="Andaman" />
      <Typography className="destinyName" variant="latoBoldTwenty">
        {destination}
      </Typography>

      <Box className="startNprice">
        <Box>
          <Typography variant="latoSemiBoldFifteen">Starting Price</Typography>
        </Box>
        <Box>
          <Typography variant="latoRuppeeSymbol">₹</Typography>
          <Typography variant="latoSemiBoldTwentyFive">{price}/-</Typography>
        </Box>
      </Box>
      {isHovering && (
        <>
          {/* <img className="shade" src={blackShade} alt="Andaman" /> */}
          <Box className="bookNow">
            
          <Button variant="holidayDestinyBtn">
            {howerbtnText}
          </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default HolidayDestCard;
