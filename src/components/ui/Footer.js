import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    height: "375px",
  },
  mainContainer: {
    // position: "absolute",
  },
  link: {
    color: "black",
    fontFamily: "Roboto",
  },
  link_typo: {
    height: "25px",
    paddingLeft: "5px",
    fontFamily: "Sansation Light, Roboto",
    fontStyle: "none",
    fontWeight: 300,
    fontSize: "22px",
    lineHeight: "25px",
    color: "#020202",
  },
  hr: {
    width: 0,
    height: "24px",
    border: "0.8px solid #383735",
  },
  icon: {
    marginBottom: "-2px",
  },
  line_hr: {
    width: "1148px",
    height: 0,
    top: "80px",
    opacity: 0.5,
    border: "0.8px solid #383735",
    alignContent: "center",
  },
  new: {
    color: "#020202",
    justify: "flex-start",
  },
  sContainer: {
    color: "#020202",
  },
  gridItem_b: {
    margin: "4rem",
  },
  f_link: {
    color: "#020202",
    fontFamily: "Roboto",
    textDecoration: "none",
  },
  m_icon: {
    width: "2rem",
    height: "2rem",
    padding: "5px",
    color: "#020202",
    textDecoration: "none",
  },
  b_link: {
    fontFamily: "Rubik, Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    Color: "#191b1f",
  },
  copyright: {
    fontFamily: "Rubik, Roboto",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#000000",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="space-evenly" className={classes.mainContainer}>
        <Grid item>
          <Grid container>
            <Grid item className={classes.link}>
              <ShoppingCartOutlinedIcon className={classes.icon} />
              <span className={classes.link_typo}>Worldwide Shipping</span>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item className={classes.link}>
              <hr className={classes.hr} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item className={classes.link}>
              <NotInterestedIcon className={classes.icon} />
              <span className={classes.link_typo}>No apps Needed!</span>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item className={classes.link}>
              <hr className={classes.hr} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item className={classes.link}>
              <VerifiedUserOutlinedIcon className={classes.icon} />
              <span className={classes.link_typo}>
                100% Money back Guarantee
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item direction="column">
          <hr className={classes.line_hr} />
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.sContainer}>
        <Grid item className={classes.gridItem_b}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.b_link}>
              Social
            </Grid>
            <Grid container>
              <Grid
                item
                component={"a"}
                href="https://www.facebook.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookIcon className={classes.m_icon} />
              </Grid>
              <Grid
                item
                component={"a"}
                href="https://www.twitter.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <TwitterIcon className={classes.m_icon} />
              </Grid>
              <Grid
                item
                component={"a"}
                href="https://www.instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <InstagramIcon className={classes.m_icon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem_b}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.b_link}>
              About
            </Grid>
            <Grid item component={Link} to="/about" className={classes.f_link}>
              About
            </Grid>
            <Grid
              item
              component={Link}
              to="/our-team"
              className={classes.f_link}
            >
              Our Team
            </Grid>
            <Grid item component={Link} to="/news" className={classes.f_link}>
              Society News
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem_b}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.b_link}>
              Recommendations
            </Grid>
            <Grid item component={Link} to="/abc" className={classes.f_link}>
              Abc
            </Grid>
            <Grid item component={Link} to="/def" className={classes.f_link}>
              Def
            </Grid>
            <Grid item component={Link} to="/xyz" className={classes.f_link}>
              Xyz
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem_b}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.b_link}>
              How To
            </Grid>
            <Grid item component={Link} to="/lorem" className={classes.f_link}>
              How to lorem de amet
            </Grid>
            <Grid item component={Link} to="/ipsum" className={classes.f_link}>
              How to ipsum sed
            </Grid>
            <Grid item component={Link} to="/dolor" className={classes.f_link}>
              How to dolor sit amet
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem_b}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.b_link}>
              Event
            </Grid>
            <Grid item component={Link} to="/lorem" className={classes.f_link}>
              Lorem
            </Grid>
            <Grid item component={Link} to="/ipsum" className={classes.f_link}>
              Ipsum
            </Grid>
            <Grid item component={Link} to="/dolor" className={classes.f_link}>
              Dolor
            </Grid>
          </Grid>
        </Grid>
        <Grid item direction="column">
          <hr className={classes.line_hr} />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item className={classes.copyright}>
          Copyright &#64; abc cards 2020
        </Grid>
      </Grid>
    </footer>
  );
}
