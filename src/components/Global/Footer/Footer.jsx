import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#333333" : "#333333",
        p: 6,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={12}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ pb: 3 }}>
              <Typography variant="footerHead" gutterBottom>
                Backpacker
              </Typography>
            </Box>

            <Typography variant="footerText">
              Backpacker travel is a style of low-budget, independent travel that emphasizes freedom, 
              adventure, and cultural immersion. Backpackers often carry all their essentials in a 
              single backpack, allowing them to move easily between destinations—whether exploring 
              bustling cities, remote villages, or natural landscapes.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box pb={3}>
              <Typography variant="footerHead" gutterBottom>
                Explore
              </Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">About Us</Typography>
            </Box>

            <Box pb={2}>
              <Typography variant="footerText">Contact Us</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Blogs</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Favourite Places</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Services</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ pb: 3 }}>
              <Typography variant="footerHead" gutterBottom>
                Legal
              </Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Term & Conditions</Typography>
            </Box>

            <Box pb={2}>
              <Typography variant="footerText">Privacy Policy</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Term of Use</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ pb: 3 }}>
              <Typography variant="footerHead" gutterBottom>
                Contact Us
              </Typography>
            </Box>
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
            <Box pt={2}>
            <Link
              color="inherit"
              href="https://Buddhagreen.com/"
         sx={{color:"white"}}
            >
              
            </Link>{" "}
            </Box>
          </Grid>
        </Grid>
        <Box
          mt={5}
          align="center"
          sx={{ borderTop: 1, borderColor: "white", pt: 3 }}
        >
          <Typography variant="footerText">
            {new Date().getFullYear() + " "}
            <Link
              color="inherit"
              href="https://backpacker.com/"
              sx={{ textDecoration: "none" }}
            >
              backpacker.com
            </Link>{" "}
            {" All Rights Reserved"}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
