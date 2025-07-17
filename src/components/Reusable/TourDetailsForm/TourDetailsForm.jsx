import { Box,Button, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./TourDetailsForm.scss";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import { Email } from "@mui/icons-material";
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
const TourDetailsForm = () => {
  const hotels = [
    { label: "2 Star" },
    { label: "3 Star" },
    { label: "4 Star" },
    { label: "5 Star" },
  ];
  return (
    <Box className="TourDetailsFormBlock">
        <Box className="fillTextBox" >
            <Typography variant="price" color="secondary">Fill in the details to know the package Price</Typography>
        </Box>
      <Grid container   rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 20 }} mb={6}>
        <Grid item md={4} xs={12} sm={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={hotels}
           className="autocompleteWidth"
            renderInput={(params) => (
              <TextField {...params} label="Select Hotels based on star" />
            )}
          />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={hotels}
            className="autocompleteWidth"
            renderInput={(params) => (
              <TextField {...params} label="Select Rooms" />
            )}
          />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={hotels}
            className="autocompleteWidth"
            renderInput={(params) => (
              <TextField {...params} label="Select Person" />
            )}
          />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Select start Date" className="autocompleteWidth" />
          </LocalizationProvider>
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Select End Date" className="autocompleteWidth" />
          </LocalizationProvider>
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={hotels}
            className="autocompleteWidth"
            renderInput={(params) => (
              <TextField {...params} label="Select Days and Nights" />
            )}
          />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            className="autocompleteWidth"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            className="autocompleteWidth"
          />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="autocompleteWidth"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={hotels}
            className="autocompleteWidth"
            renderInput={(params) => (
              <TextField {...params} label="Select Transport" />
            )}
          />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Coupon"
            variant="outlined"
            className="autocompleteWidth"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <KeyboardCommandKeyIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Box className="continueButton">
      <Button variant="formButton">Continue</Button>

      </Box>
    </Box>
  );
};

export default TourDetailsForm;
