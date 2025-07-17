import { Box} from "@mui/material";
import Footer from "../../components/Global/Footer/Footer";
import DrawerAppBar from "../../components/Global/Navbar/Navbar";
import Heading from "../../components/Reusable/Heading/Heading";
import HolidayDestCard from "../../components/Reusable/HolidayDestCard/HolidayDestCard";
import IndianDestCard from "../../components/Reusable/IndianDestCard/IndianDestCard";
import ImageBg from "../../components/Reusable/ImageBg/ImageBg";
import Testimonials from "../../components/Reusable/Testimonials/Testimonials";
import ContactUs from "../../components/Reusable/ContactUs/ContactUs";
import {
  adventureHeadingData,
  indianCardData,
  holidayCardData,
  blogCardData,
  specialHolidayCardData,
} from "../../Data.js";
import bg from "../../assets/images/bg.png";
import "./LandingPage.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { responsiveIndianCard, responsive } from "../../Data.js";
import AddNewDestination from "./component/AddNewDestination/AddNewDestination";
const LandingPage = () => {
  const navigate = useNavigate();
  function testClick(id) {
    switch (id) {
      case 1:
        navigate("/blogone");
        break;
      case 2:
        navigate("/blogtwo");
        break;
      case 3:
        navigate("/blogthree");
        break;
      default:
      // code block
    }
  }

  return (
    <Box className="landingPageBlock">
      <DrawerAppBar />
      <ImageBg
        image={bg}
        headingText="Travel New Destination to Explore the World"
        placeHolder="Search for your dream place.."
      />
      {/* <Box className="leftRigtSpacing">
        <Heading
          headingDestination={indianCardData.title}
          subText={indianCardData.description}
          buttonText={indianCardData.viewMore}
          isVisibleViewLink={true}
        />

        <Carousel responsive={responsiveIndianCard} itemClass="carouselClass">
          {indianCardData?.cardData.map((element, index) => {
            return (
              <IndianDestCard
                key={index}
                img={element.img}
                CardHeading={element.CardHeading}
                Rating={element.Rating}
                days={element.days}
                para={element.para}
                rate={element.rate}
                priceAndBook={element.priceAndBook}
              />
            );
          })}
        </Carousel>

        <Heading
          headingDestination={holidayCardData.title}
          subText={holidayCardData.description}
          buttonText={holidayCardData.viewMore}
          isVisibleViewLink={true}
        />

        <Carousel responsive={responsive}>
          {holidayCardData?.cardData.map((element) => {
            return (
              <HolidayDestCard
                key={element.id}
                im={element.im}
                destination={element.destination}
                price={element.price}
                howerbtnText="BOOK NOW"
              />
            );
          })}
        </Carousel>

        <Heading
          headingDestination={specialHolidayCardData.title}
          subText={specialHolidayCardData.description}
          buttonText={specialHolidayCardData.viewMore}
          isVisibleViewLink={true}
        />

        <Carousel responsive={responsive}>
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
        </Carousel>

        <Heading
          headingDestination={adventureHeadingData.title}
          subText={adventureHeadingData.description}
          isVisibleViewLink={false}
        />
      <AddNewDestination/>

        <Box>
          <video
            style={{ borderRadius: "10px" }}
            controls
            autoPlay
            width="100%"
            height="auto"
            muted
            loop
            poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
          >
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>
        </Box>

        <Heading
          headingDestination={blogCardData.title}
          subText={blogCardData.description}
          buttonText={blogCardData.viewMore}
          isVisibleViewLink={true}
        />

        <Carousel responsive={responsiveIndianCard}>
          {blogCardData?.cardData.map((element) => {
            return (
              <Box onClick={() => testClick(element.id)}>
                <IndianDestCard
                  key={element.id}
                  img={element.img}
                  para={element.para}
                  Rating={element.Rating}
                  CardHeading={element.CardHeading}
                  isTrue={element.isTrue}
                />
              </Box>
            );
          })}
        </Carousel>
        <Box mt={10} mb={10}>
          <Testimonials />
        </Box>
      </Box> */}
      {/* <Box mb={10}>
        <ContactUs />
      </Box> */}
      <Footer />
    </Box>
  );
};

export default LandingPage;
