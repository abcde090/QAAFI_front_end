import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import ImgMediaCard from './menu';
import FloorPlan00803 from "./Floor_Plan_0080_3";
import FloorPlan00833 from "./Floor_plan_0083_3";
import FloorPlan00832 from "./Floor_plan_0083_2";
import FloorPlan00802 from "./Floor_Plan_0080_2";
import FloorPlan0082k2 from "./Floor_plan_0082k_2";
import FloorPlan00834 from "./Floor_plan_0083_4";
import FloorPlan00835 from "./Floor_plan_0083_5";
import FloorPlan00836 from "./Floor_plan_0083_6";
import FloorPlan0088501 from "./Floor_Plan_8850_1";


import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    flexGrow: 1
  },
  girdContainer: {
    justifyContent: "center"
  },
  gridItem: {
    display: "flex",
    justifyContent: "center"
  }
});

export default function Cards() {
  const classes = useStyles();
  return (
    <div className={classes.cards}>
      <Grid container className={classes.girdContainer} spacing={3}>
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
          <FloorPlan00803 />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
          <FloorPlan00833 />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
          <FloorPlan00832 />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
          <FloorPlan00802 />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
          <FloorPlan0082k2 />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
          <FloorPlan00834 />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
          <FloorPlan00835 />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
          <FloorPlan00836 />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
          <FloorPlan0088501 />
        </Grid>
      </Grid>

    </div>
  );
}
