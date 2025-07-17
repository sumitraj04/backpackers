import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CompleteDetailsPackage.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Link } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "55%",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};
const IconAndImage = (props) => {
  const { icon, text } = props;
  return (
    <Box className="iconAndImageBlock">
      <Box>{icon}</Box>
      <Box>
        <Typography
          variant="latoSemiBoldFifteen"
          sx={{ color: "#6E7191", marginLeft: "10px" }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};
export default function CompleteDetailsPackage() {
  return (
    <Box className="CompleteDetailsPackage">
      <Box sx={style}>
        <Box sx={{textAlign:"center"}}>
          <Typography variant="footerHead" color="primary">
            Complete Details for your package
          </Typography>
        </Box>
        <Box className="destinationName">
          <Typography variant="boldSixteen" color="secondary">
            Manali,Kasol Tour Package for Himachal Pradesh{" "}
          </Typography>
          <Typography variant="boldSixteen">4 days 3 Nights</Typography>
        </Box>
        <IconAndImage
          // border: "2px solid #000",
          icon={<CalendarMonthIcon sx={{ color: "#6E7191" }} />}
          text="11, Aug 2023 To 15, Aug 2023"
        />
        <IconAndImage
          icon={<PersonIcon sx={{ color: "#6E7191" }} />}
          text="Rajeev Singh"
        />
        <IconAndImage
          icon={<EmailIcon sx={{ color: "#6E7191" }} />}
          text="rajeevsingh123@gmail.com"
        />
        <IconAndImage
          icon={<ApartmentIcon sx={{ color: "#6E7191" }} />}
          text="3 star Hotel, 3 Rooms, 5 Persons"
        />
        <IconAndImage
          icon={<ContactsIcon sx={{ color: "#6E7191" }} />}
          text="91+ 8092536054"
        />

        <Box className="costBlock">
          <Typography variant="footerHead" color="secondary">Total Cost :</Typography>
          <Typography variant="boldSixteen" sx={{textDecoration:"line-through",marginLeft:"1.111vw",marginRight:"1.111vw"}}>Rs. 40,499</Typography>
          <Typography variant="footerHead" color="primary">Rs. 30,499</Typography>
        </Box>
        <Box className="lastRow">
          <Box>
            <Typography ></Typography>
            <Link className="redText">Cancellation Policy</Link>
          </Box>
          <Box className="buttonBlock">
            <Box>
              <Button variant="outlined">Edit</Button>
            </Box>
            <Box ml={2}>
              <Button variant="contained" sx={{wordWrap:"break-word"}}>Book Now</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
