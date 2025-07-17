import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../../Global/Footer/Footer";
import DrawerAppBar from "../../Global/Navbar/Navbar";
import TextOverImage from "../TextOverImage/TextOverImage";
import "./TermAndPolicy.scss";

const TermAndPolicy = (props) => {
  const {arrayName}=props;
  return (
    <Box className="privacyPolicyBlock">
      <DrawerAppBar />
      {arrayName.map((element,index) => {
        const {
          image,
          heading,
          readOurPolicy,
          headingParagraphData,
          subHeading,
          subHeadingParagraphData,
          dateUpdated,
        } = element;
        return (
          <Box key={index}>
            <TextOverImage
              pageHeading={heading}
              paraOne={readOurPolicy}
              dateData={dateUpdated}
              img={image}
            />
            <Box className="centerTextBlock">
              <Box className="bottomText">
                <Box>
                  <Box>
                    <Typography variant="boldFourtyEightWhite" color="primary">
                      {heading}
                    </Typography>
                  </Box>

                  {headingParagraphData.map((element,index) => {
                    return (
                      <Box key={index} mb={4}>
                        <Typography variant="regularEighteen">
                          {element}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>

                <Box>
                  <Typography variant="boldFourtyEightWhite" color="primary">
                    {subHeading}
                  </Typography>
                </Box>
                {subHeadingParagraphData.map((element) => {
                  return (
                    <Box key={element.id} mb={3}>
                      <Typography variant="regularEighteen">
                        {element}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        );
      })}

      <Footer />
    </Box>
  );
};

export default TermAndPolicy;
