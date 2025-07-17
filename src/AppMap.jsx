import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
const AppMap = () => {
  return (
    <Box>
      <ul>
        <li>
          <Link to="/">Content-1-landing page</Link>
        </li>
        <li>
          <Link to="/packagelisting">Content-2-view all tours listing</Link>
        </li>
        <li>
          <Link to="/bookingdetailspage">
            Content-3,4,5,6,7,8-booking details page
          </Link>
        </li>
        <li>
          <Link to="/favouriteplace">Content-10-Favourite Places</Link>
        </li>
        <li>
          <Link to="/cancellationpolicy">Content-11-cancellation policy</Link>
        </li>
        <li>
          <Link to="/bloglisting">Content-13,14-BLOG LISTING</Link>
        </li>
        <li>
          <Link to="/blogone">Content-15-Blog 1</Link>
        </li>
        <li>
          <Link to="/blogtwo">Content-16-Blog 2</Link>
        </li>
        <li>
          <Link to="/blogthree">Content-17-Blog 3</Link>
        </li>
        <li>
          <Link to="/blogfive">Content-19-Blog 5</Link>
        </li>

        <li>
          <Link to="/blogsix">Content-20-Blog 6</Link>
        </li>
        <li>
          <Link to="/blogseven">Content-21-Blog 7</Link>
        </li>
        <li>
          <Link to="/aboutus">Content-23-About Us</Link>
        </li>
        <li>
          <Link to="/termandcondition">Content-24-term & conditions</Link>
        </li>
        <li>
          <Link to="/privacypolicy">Content-25-privacy policy</Link>
        </li>

        <li>
          <Link to="/termofuse">Content-26-term of use</Link>
        </li>
        <li>
          <Link to="/faqs">Content-27-faqs</Link>
        </li>
        <li>
          <Link to="/signup">Content-28-signup</Link>
        </li>
        <li>
          <Link to="/signin">Content-29-signin</Link>
        </li>
        <li>
          <Link to="/forgot">Content-30-Forgot</Link>
        </li>
        <li>
          <Link to="/verify">Content-31-otp-screen</Link>
        </li>
        <li>
          <Link to="/reset">Content-32-reset Password</Link>
        </li>
        <li>
          <Link to="/reduxSagaTesting">reduxSagaTesting</Link>
        </li>
        <li>
          <Link to="/privacypolicy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/reduxSagaTesting">reduxSagaTesting</Link>
        </li>
        <li>
          <Link to="/blogone">Blog One</Link>
        </li>
        <li>
          <Link to="/blogtwo">Blog Two</Link>
        </li>
      </ul>
    </Box>
  );
};

export default AppMap;
