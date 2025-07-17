import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import tick from "../../assets/images/tick.png";
import "./ThankYou.scss";
import Link from "@mui/material/Link";

import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
const ThankYou = () => {
  return (
    <Box className="thankYouBlock">
      <Box className="thankYouInner">
        <Box className="imageTick">
          <CardMedia
            image={tick}
            title="backpacker"
            component="img"
            className="imageClass"
          />
        </Box>
        <Box>
          <Typography className="thankYouText">Thank You</Typography>
        </Box>
        <Box m={2}>
          <Typography color="secondary">
            Your message has been received and we will be contacting you shortly
            to follow-up. If you would like to speak to someone immediately feel
            free to call.
          </Typography>
        </Box>
        <Box>
          <Typography variant="boldTwentyFour">1822-123-123</Typography>
        </Box>
        <Box mt={3} mb={2}>
          <Typography variant="boldTwentyFour" color="secondary">
            FOLLOW US
          </Typography>
        </Box>
        <Box>
          <Link href="https://www.facebook.com/">
            <Facebook />
          </Link>
          <Link href="https://www.instagram.com/" sx={{ pl: 1, pr: 1 }}>
            <Instagram />
          </Link>
          <Link href="https://www.twitter.com/">
            <Twitter />
          </Link>
          <Link href="https://www.twitter.com/" sx={{ pl: 1, pr: 1 }}>
            <LinkedIn />
          </Link>
          <Link href="https://www.twitter.com/">
            <WhatsApp />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ThankYou;
