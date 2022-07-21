import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  card: {
    width: "506.86px",
    height: "396.33px",
  },

  innerCard: {
    top: "62px",
    left: "32px",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "444.61px",
    height: "275px",
    background: " linear-gradient(103.02deg, #494846 -16.31%, #020202 89.62%)",
    transform: "rotate(-17.56deg)",
  },

  item_typo: {
    position: "absolute",
    width: "333.87px",
    height: "106px",
    fontFamily: "Sansation Light",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "47px",
    lineHeight: "53px",
    textAlign: "center",
    color: "#d39c83",
  },
}));

function BusinessCard() {
  const classes = useStyle();

  return (
    <Grid container className={classes.card}>
      <Grid item>
        <Grid container className={classes.innerCard}>
          <Grid item className={classes.item_typo}>
            Your Business Card
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BusinessCard;
