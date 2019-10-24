import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import ImgMediaCard from './menu';
import StaffMenu from './staffMenu';
import ReportMenu from './reportMenu';
import MapMenu from './mapMenu';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    cards: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      flexGrow: 1
    },
    girdContainer:{
      justifyContent: "center"
    },
    gridItem:{
      display: "flex",
      justifyContent: "center"
    }
  });

export default function Cards() {
    const classes = useStyles();
    return (
      <div className={classes.cards}>
      <Grid container className={classes.girdContainer} spacing={3} >
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
        <StaffMenu/>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
        <ReportMenu/>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItem}>
        <MapMenu/>
        </Grid>
      </Grid>
      </div>
    );
  }