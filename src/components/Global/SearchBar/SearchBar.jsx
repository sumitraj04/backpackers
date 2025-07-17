import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
  const {placeHolder}=props;
  return (
    <Box sx={{ m: 2 }}>
      <TextField
        id="outlined-basic"
        placeholder={placeHolder}
        variant="outlined"
        sx={{
          color: "white",
          background: "rgba(255,255,255,0.2)",
          borderRadius: 10,
          "& .MuiSvgIcon-root": { color: "white" },
          "& .MuiInputBase-root": {
            wordWrap: "break-word",
            opacity: 1,
            fontWeight: "semibold",
            color: "rgba(255,255,255)",
            fontSize: "2vw",
          },
        }}
        InputProps={{
          sx: { borderRadius: 10, width: "57vw", height: "5vw",pl:"2vw",pr:"2vw" },
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ height: "3vw", width: "3vw" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
