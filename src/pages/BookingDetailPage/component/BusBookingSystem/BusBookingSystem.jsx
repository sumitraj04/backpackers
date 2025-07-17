import { Box, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import "./BusBookingSystem.scss";
import steering from "../../../../assets/images/steering.png";
const BusBookingSystem = () => {
  const [seatArray, setSeatArray] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats] = useState([3, 5, 4]);
  const seatData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
  ];

  function clickHandler(num) {
    if (bookedSeats.includes(num)) {
      alert("This seat is already booked. Please choose another seat.");
      return;
    }
    if (seatArray.includes(num)) {
      setSeatArray(seatArray.filter((item) => item !== num));
      setSelectedSeats(selectedSeats.filter((item) => item !== num));
    } else {
      setSeatArray([...seatArray, num]);
      setSelectedSeats([...selectedSeats, num]);
    }
  }
  return (
    <Box className="busBookingBlock">
      <Box className="seatOverview">
        <Box className="box">
          <Box className="boxWidth1"></Box>
          <Box>
            <Typography sx={{color:"#16056b"}}>Booked Seats</Typography>
          </Box>
        </Box>
        <Box className="box">
          <Box className="boxWidth2"></Box>
          <Typography sx={{color:"#d5436a"}}>Selected Seats</Typography>
        </Box>
        <Box className="box">
          <Box className="boxWidth3"></Box>
          <Typography sx={{color:"#c4c4c4"}}>Empty Seats</Typography>
        </Box>
      </Box>

      <Box className="busBorder">
        <Box className="steeringImg">
          <Box>
            <Typography sx={{ color: "#C4C4C4" }}>Entry</Typography>
          </Box>
          <CardMedia component="img" image={steering} className="img" />
        </Box>
        {seatData.map((element) => {
           const isBooked = bookedSeats.includes(element.id);
           const isSelected = seatArray.includes(element.id);
          return (
            <Box
              key={element.id}
              className={`innerBus ${isBooked ? "booked" : ""} ${isSelected ? "selected" : ""}`}
              onClick={() => clickHandler(element.id)}
            >{element.id}
            </Box>
          );
        })}
      </Box>
      <Box>
        <Typography variant="h4">You booked seat</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {seatArray &&
          seatArray.map((element, index) => {
            return (
              <Box key={index}>
                <Typography variant="h6" sx={{ margin: 1 }}>
                  {element}&nbsp;
                </Typography>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default BusBookingSystem;
