import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import homeImage from "../../assets/home_baneer1.png";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    width: "1440px",
    height: "832px",
    backgroundColor: "#ffffff",
  },
  homeImage: {
    width: "1440px",
    height: "832px",
  },
}));

function HomeBanner() {
  const classes = useStyles();

  return (
    <Grid container className={classes.homeContainer}>
      <Grid item>
        <img
          src={homeImage}
          alt="home base Image"
          className={classes.homeImage}
        />
      </Grid>
    </Grid>
  );
}

export default HomeBanner;
