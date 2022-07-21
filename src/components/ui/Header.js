import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Menu, MenuItem } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1440px",
    // height: "4697px",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  toolbar: {
    padding: "0 20px",
  },

  logo: {
    height: "48px",
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  cartIcon: {
    margin: "0 20px",
  },
  button1: {
    color: "#fff",
    background: "#000000",
    margin: " 0 20px",
    padding: "5px 20px",
    border: "2px solid #fff",
  },
  menu: {
    backgroundColor: theme.palette.common.black,
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
      backgroundColor: "#d39c83",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabChangeHandler = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(true);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: "Company", link: "/company" },
    { name: "Individual", link: "/individual" },
    { name: "Pet", link: "/pet" },
    { name: "Kid", link: "/kid" },
    { name: "Custom", link: "/custom" },
  ];

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/about" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/purchase-card" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/contect-us" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/cart" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/login" && value !== 5) {
      setValue(5);
    } else if (window.location.pathname === "/get-your-card" && value !== 6) {
      setValue(6);
    }

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/about":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/purchase-card":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/company":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(0);
        }
        break;
      case "/individual":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(1);
        }
        break;
      case "/pet":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(2);
        }
        break;
      case "/kid":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(3);
        }
        break;
      case "/custom":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(4);
        }
        break;
      case "/contect-us":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/cart":
        if (value !== 4) {
          setValue(4);
        }
        break;
      case "/login":
        if (value !== 5) {
          setValue(5);
        }
        break;
      case "/get-your-card":
        if (value !== 6) {
          setValue(6);
        }
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <div className={classes.root}>
          <AppBar position="static" color="secondary">
            <Toolbar disableGutters={true} className={classes.toolbar}>
              <Button
                component={Link}
                to="/"
                onClick={() => setValue(0)}
                disableRipple
              >
                <img src={logo} alt="Company logo pic" />
              </Button>
              <Tabs
                value={value}
                onChange={tabChangeHandler}
                className={classes.tabsContainer}
                indicatorColor="primary"
              >
                <Tab
                  className={classes.tab}
                  component={Link}
                  to="/"
                  label="Home"
                />
                <Tab
                  className={classes.tab}
                  component={Link}
                  to="/about"
                  label="About "
                />
                <Tab
                  aria-owns={anchorEl ? "simple-menu" : undefined}
                  // aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup={anchorEl ? "true" : undefined}
                  className={classes.tab}
                  component={Link}
                  onClick={(event) => handleClick(event)}
                  // onMouseOver={(event) => handleClick(event)}
                  to="/purchase-card"
                  label="Purchase Card &#8711;"
                />
                <Tab
                  className={classes.tab}
                  component={Link}
                  to="/contect-us"
                  label="Contact Us"
                />

                <Tab
                  icon={<ShoppingCartOutlinedIcon />}
                  className={classes.tab}
                  component={Link}
                  to="/cart"
                />
              </Tabs>

              <Button
                variant="contained"
                background="secondry"
                className={classes.button1}
                component={Link}
                to="/login"
                onClick={() => setValue(5)}
              >
                Login
              </Button>
              <Button
                variant="contained"
                style={{ background: "#d39c83" }}
                className={classes.button2}
                endIcon={<ArrowRightAltIcon />}
                component={Link}
                to="/get-your-card"
                onClick={() => setValue(6)}
              >
                Get Your Card
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                MinuListProps={{ onMouseLeave: handleClose }}
                elevation={0}
              >
                {menuOptions.map((option, i) => (
                  <MenuItem
                    key={option}
                    component={Link}
                    to={option.link}
                    classes={{ root: classes.menuItem }}
                    onClick={(event) => {
                      handleMenuItemClick(event, i);
                      setValue(2);
                      handleClose();
                    }}
                    selected={i === selectedIndex && value === 2}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </Menu>
            </Toolbar>
          </AppBar>
        </div>
      </ElevationScroll>
      {/* <div className={classes.toolbarMargin}></div> */}
    </React.Fragment>
  );
}
