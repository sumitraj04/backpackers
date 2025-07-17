import { Route, Routes } from "react-router-dom";
import AppMap from "./AppMap";
import BlogListing from "./pages/BlogListing/BlogListing";
import BlogOne from "./pages/BlogOne/BlogOne";
import BlogTwo from "./pages/BlogTwo/BlogTwo";
import BookingDetailPage from "./pages/BookingDetailPage/BookingDetailPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import NotFound from "./pages/NotFound/NotFound";
import PackagesListing from "./pages/PackagesListing/PackagesListing";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import ReduxSagaTesting from "./pages/ReduxTesting/ReduxSagaTesting";
import BlogThree from "./pages/BlogThree/BlogThree";
import TermAndCondition from "./pages/TermAndCondition/TermAndCondition";
import TermOfUse from "./pages/TermOfUse/TermOfUse";
import AboutUs from "./pages/AboutUs/AboutUs";
import { FavouritePlace } from "./pages/FavouritePlace/FavouritePlace";
import CancellationPolicy from "./pages/CancellationPolicy/CancellationPolicy";
import BlogFive from "./pages/BlogFive/BlogFive";
import BlogSeven from "./pages/BlogSeven/BlogSeven";
import BlogSix from "./pages/BlogSix/BlogSix";
import Faqs from "./pages/Faqs/Faqs";
import BookmarkedListing from "./pages/BookmarkedListing/BookmarkedListing";
import SignUp from "./pages/SignInSignup/Components/SignUp/SignUp";
import SignIn from "./pages/SignInSignup/Components/SignIn/SignIn";
import Forgot from "./pages/SignInSignup/Components/Forgot/Forgot";
import ResetPassword from "./pages/SignInSignup/Components/ResetPassword/ResetPassword";
import VerifyEmail from "./pages/SignInSignup/Components/VerifyEmail/VerifyEmail";
import BusBookingSystem from "./pages/BookingDetailPage/component/BusBookingSystem/BusBookingSystem";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/packagelisting" element={<PackagesListing />} />
      <Route path="/packagelisting/:id" element={<PackagesListing />} />
      <Route path="/bloglisting" element={<BlogListing />} />
      <Route path="/bookingdetailspage" element={<BookingDetailPage />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/termandcondition" element={<TermAndCondition />} />
      <Route path="/termofuse" element={<TermOfUse />} />
      <Route path="/reduxSagaTesting" element={<ReduxSagaTesting />} />
      <Route path="/blogone" element={<BlogOne />} />
      <Route path="/blogtwo" element={<BlogTwo />} />
      <Route path="/blogthree" element={<BlogThree />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/favouriteplace" element={<FavouritePlace />} />
      <Route path="/cancellationpolicy" element={<CancellationPolicy />} />
      <Route path="/blogfive" element={<BlogFive />} />
      <Route path="/blogsix" element={<BlogSix />} />
      <Route path="/blogseven" element={<BlogSeven />} />
      <Route path="/bookmarkedlist" element={<BookmarkedListing />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/appmap" element={<AppMap />} />
      <Route path="/verify" element={<VerifyEmail />} />
      <Route path="/bus" element={<BusBookingSystem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
