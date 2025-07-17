import "./Help.scss";
import { useState } from "react";
import { Box } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import HelpForm from "../HelpForm/HelpForm";
const Help = () => {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <Box className="helpBlock" onClick={() => setShow(!show)}>
        <Box className="innerHelp">
          <ChatBubbleIcon sx={{ color: "#fff" }} />
        </Box>
      </Box>
      {show && <HelpForm mainHeading="How can we help?"
      subHeading="We usually respond in a few hours"
      firstInputName="Subject"
      mail="Email Address"
      mobile="Mobile no."
      comments="How can we help you?"
      />}
    </Box>
  );
};

export default Help;
