import TermAndPolicy from "../../components/Reusable/TermAndPolicy/TermAndPolicy";
import React from "react";
import { privacyPolictData } from "../../Data";
const PrivacyPolicy = () => {
  console.log("privacyPolictData", privacyPolictData);
  return <TermAndPolicy arrayName={privacyPolictData} />;
};

export default PrivacyPolicy;
