import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import "./Faqs.scss";
import Footer from "../../components/Global/Footer/Footer";
import blogbottomimg from "../../assets/images/faqImage.png";
import ImageBg from "../../components/Reusable/ImageBg/ImageBg";
import ContactUs from "../../components/Reusable/ContactUs/ContactUs";
const Faqs = () => {
  const data = [
    {
      title: "What makes our travel company different from others?",
      id:1,
      paras: [
        {
          key:1,
          para1:
            "We specialize in creating personalized, immersive travel experiences that go beyond typical sightseeing. Our expert local guides, carefully curated itineraries, and commitment to responsible tourism ensure every trip is authentic, enriching, and hassle-free.",
        }
      ],
    },
    {
      title: "Do we offer support during the trip?",
      id:2,
      paras: [
        {
          key:2,
          para1:
            "Yes! Our support team is available 24/7 to assist you before, during, and after your journey. Whether it’s a last-minute change or an on-the-go question, we’re just a message or call away.",
        }
      ],
    },
    {
      title: "Are our trips suitable for solo travelers, families, or groups?",
      key:3,
      paras: [
        {
          id:3,
          para1:
            "Absolutely. We design trips for all kinds of travelers. Whether you’re exploring solo, vacationing with family, or planning a group adventure, we tailor our services to match your travel style and needs.",
        }
      ],
    },
  ];
  return (
    <Box>
      <Box className="faqs">
        <DrawerAppBar />
        <ImageBg
          image={blogbottomimg}
          headingText="Frequently asked Questions"
          placeHolder="Start by asking us a Question"
        />
        <Box className="bottomWrapper">
          {/* <Box className="title">
            <Typography variant="boldThirtyTwo" color="primary">
              BASICS
            </Typography>
          </Box> */}
          {/* <Box>
            {data.map((item) => {
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.paras.map((current) => {
                      return (
                        <Box className="para">
                          <Typography>{current.para1}</Typography>
                        </Box>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box> */}
          <Box className="title">
            <Typography variant="boldThirtyTwo" color="primary">
              WHY US
            </Typography>
          </Box>
          <Box>
            {data.map((item) => {
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography key={item.id}>{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.paras.map((current) => {
                      return (
                        <Box  className="para">
                          <Typography >{current.para1}</Typography>
                        </Box>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Box>
        <Box className="contactUsBlock">
        <ContactUs />
        </Box>
       
      </Box>
      <Footer />
    </Box>
  );
};

export default Faqs;
