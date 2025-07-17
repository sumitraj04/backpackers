import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TourDetailsForm from "../TourDetailsForm/TourDetailsForm";
import Itinerary from "../Itinerary/Itinerary"
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Package Overview"
            {...a11yProps(0)}
            sx={{ textTransform: "none", fontSize: "20px" }}
          />
          <Tab
            label="Itinerary"
            {...a11yProps(1)}
            sx={{ textTransform: "none", fontSize: "20px" }}
          />
          <Tab
            label="Additional Info"
            {...a11yProps(2)}
            sx={{ textTransform: "none", fontSize: "20px" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TourDetailsForm />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Itinerary />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AdditionalInfo />
      </CustomTabPanel>
    </Box>
  );
}
