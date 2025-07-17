import { createTheme } from "@mui/material/styles";
export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#0A9E88",
    },
    secondary: {
      main: "#0F0F0F",
    },
    tertiary: {
      main: "#ffffff",
    },
  },
  typography: {
    regular: {
      fontSize: "1rem",
      lineHeight: "24px",
      color: "#14142B",
    },
    navTabs: {
      fontSize: "1.3rem",
      lineHeight: "24px",
      color: "#FFFFFF",
    },
    head: {
      fontSize: "2rem",
      lineHeight: "32px",
      color: "#0A9E88",
      fontWeight: "bold",
    },
    cardHead: {
      fontSize: "1.5rem",
      lineHeight: "24px",
      color: "#14142B",
    },
    subText: {
      fontSize: "14px",
      lineHeight: "24px",
      color: "#14142B",
    },
    boldSixteen: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "bold",
      color: "#0A9E88",
    },
    regularSixteenLight: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "400px",
      color: "#6E7191",
    },
    regularEighteen: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "400px",
      color: "#14142B",
    },
    price: {
      fontSize: "1.25rem",
      lineHeight: "24px",
      fontWeight: "bold",
      color: "#0A9E88",
    },
    mediumSixteen: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "medium",
      color: "#14142B",
      textDecoration: "underline",
    },
    latoBoldTwenty: {
      fontSize: "1.25rem",
      lineHeight: "28.6px",
      fontWeight: "bold",
      color: "#ffffff",
    },
    latoSemiBoldFifteen: {
      fontSize: "0.938rem",
      lineHeight: "21.4px",
      fontWeight: 600,
      color: "#ffffff",
    },
    latoSemiBoldTwentyFive: {
      fontSize: "1.563rem",
      lineHeight: "28px",
      fontWeight: 600,
      color: "#ffffff",
    },
    latoRuppeeSymbol: {
      fontSize: "13px",
      lineHeight: "28px",
      fontWeight: 600,
      color: "#ffffff",
    },
    footerHead: {
      fontSize: "1.5rem",
      lineHeight: "24px",
      fontWeight: "bold",
      color: "#ffffff",
    },
    footerText: {
      fontSize: "1rem",
      lineHeight: "24px",
      color: "#ffffff",
    },
    semiBoldSixtyEight: {
      fontSize: "5vw",
      color: "#ffffff",
      lineHeight: "6vw",
    },
    boldFourtyEight: {
      fontSize: "4vw",
      color: "#0A9E88",
      lineHeight: "auto",
    },
    writerFont: {
      fontSize: "2.5vw",
      lineHeight: "24px",
      color: "#0A9E88",
      fontWeight: "bold",
    },
    boldFourtyEightWhite: {
      fontSize: "4vw",
      color: "#fff",
      fontWeight: 700,
      lineHeight: "auto",
    },
    boldTwentyEightPrimary: {
      fontSize: "1.8vw",
      lineHeight: "24px",
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#0A9E88",
    },
    regularTwentyFour: {
      fontSize: "1.3vw",
      lineHeight: "30px",
      fontWeight: 500,
      color: "#ffffff",
      "@media (max-width: 768px)": {
        fontSize: "2.222vw",
      },
      "@media (max-width: 500px)": {
        fontSize: "4.222vw",
      lineHeight: "20px",

      },
    },
    semiBoldTwentyFour: {
      fontSize: "1.3vw",
      lineHeight: "24px",
      color: "#6E7191",
      "@media (max-width: 768px)": {
        fontSize: "2vw",
      },
      "@media (max-width: 500px)": {
        fontSize: "4vw",
      },
    },
    boldSixtyEight: {
      fontSize: "4.722vw",
      color: "#ffffff",
      lineHeight: "6vw",
      fontWeight: "bold",
    },
    boldThirtyTwo: {
      fontSize: "2.222vw",
      lineHeight: "1.667vw",
      fontWeight: "bold",
      "@media (max-width: 768px)": {
        fontSize: "3.222vw",
      },
      "@media (max-width: 400px)": {
        fontSize: "4.222vw",
      },
    },
    boldTwentyFour: {
      fontSize: "24px",
      color: "#0A9E88",
      fontWeight: 700,
      lineHeight: "normal",
    },
    boldFourty: {
      color: "#FFF",
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
      "@media (max-width: 500px)": {
        fontSize: "32px",
      },
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      variants: [
        {
          props: { variant: "dark" },
          style: {
            textTransform: "none",
            borderRadius: "2.5rem",
            backgroundColor: "#0A9E88",
            fontFamily: "lato",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#ffffff",
            padding: "13px 32px",
            "&:hover": {
              textDecoration: "none",
              backgroundColor: "#35C37D",
            },
          },
        },
        {
          props: { variant: "outline" },
          style: {
            textTransform: "none",
            borderRadius: "2.5rem",
            backgroundColor: "transparent",
            fontFamily: "lato",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#ffffff",
            border: "1px solid #fff",
            padding: "13px 32px",
            "&:hover": {
              textDecoration: "none",
              backgroundColor: "#35C37D",
            },
          },
        },
        {
          props: { variant: "darkNmedium" },
          style: {
            textTransform: "none",
            borderRadius: "2.5rem",
            backgroundColor: "#0A9E88",
            fontFamily: "lato",
            fontWeight: "bold",
            fontSize: "0.875rem",
            color: "#ffffff",
            border: "1px solid #fff",
            padding: "0.469rem 1.5rem",
            "&:hover": {
              textDecoration: "none",
              backgroundColor: "#35C37D",
            },
          },
        },
        {
          props: { variant: "holidayDestinyBtn" },
          style: {
            textTransform: "none",
            borderRadius: "2.5rem",
            fontFamily: "lato",
            fontWeight: "bold",
            fontSize: "0.875rem",
            color: "#ffffff",
            border: "1px solid #fff",
            padding: "0.469rem 1.5rem",
            "&:hover": {
              textDecoration: "none",
            },
          },
        },
        {
          props: { variant: "formButton" },
          style: {
            textTransform: "none",
            borderRadius: "4px",
            backgroundColor: "#0A9E88",
            fontFamily: "lato",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#ffffff",
            padding: "0.69vw 2.7vw",
            "&:hover": {
              textDecoration: "none",
              backgroundColor: "#35C37D",
            },
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "filled" },
          style: {
            textTransform: "none",
            border: `2px solid  #0A9E88`,
            marginBottom:'1vw',
            marginTop: "1vw",
            borderRadius: "4px",
            width: "33vw",
            "& .MuiInputBase-root": {
              wordWrap: "break-word",
              fontWeight: "semibold",
              color: "rgba(255,255,255)",
              fontSize: "1rem",
            },
            "& .MuiInputLabel-root": {
              wordWrap: "break-word",
              fontWeight: "semibold",
              color: "rgba(255,255,255)",
              fontSize: "1rem",
            },
          },
        },
      ],
    },
  },
});
