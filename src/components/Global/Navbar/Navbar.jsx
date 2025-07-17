import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBlogListAction } from "../../../reduxState/slices/BuddhaJourneySlices";
const drawerWidth = 240;
const pages = [
  {
    id: 1,
    page: "About Us",
    link: "aboutus",
    // action:getAboutAction(),
  },
  {
    id: 2,
    page: "FAQs",
    link: "faqs",
    // action:getServiceAction(),
  },
  // {
  //   id: 3,
  //   page: "Blog",
  //   link: "bloglisting",
  //   // action: getBlogListAction(),
  // },
];
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const dispatch = useDispatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Buddha Journey
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          backgroundColor: "rgba(15, 15, 15,0.9)",
          pr: 2,
          pl: 2,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Link to='/'>
            <img className="avatar" src={logo} alt="Buddha Logo" />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "flex" },
              ml: 1,
            }}
          >
            {pages.map((element) => (
              <Button
                key={element.id}
                sx={{
                  color: "white",
                  textTransform: "none",
                }}
                // onClick={() => dispatch(element.action)}
              >
                <Box mr={1} ml={1}>
                  <Link to={`/${element.link}`}>
                    {" "}
                    <Typography variant="navTabs"> {element.page} </Typography>
                  </Link>
                </Box>
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <Button component="label" variant="none" startIcon={<CallIcon />}>
              <Typography variant="navTabs">1822-123-123</Typography>
            </Button>

            <Link to="/signin">
              <Button variant="outline" sx={{ mr: 2 }}>
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="dark" sx={{ mr: 2 }}>
                Sign Up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
