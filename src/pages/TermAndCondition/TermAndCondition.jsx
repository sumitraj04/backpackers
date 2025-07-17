import TermAndPolicy from "../../components/Reusable/TermAndPolicy/TermAndPolicy";
import React from "react";
import { termAndCondition } from "../../Data";
const TermAndCondition = () => {
  return <TermAndPolicy arrayName={termAndCondition} />;
};

export default TermAndCondition;
