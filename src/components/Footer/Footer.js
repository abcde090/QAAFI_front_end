/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="/"> 
              <a className={classes.block}>
                Home
              </a>
               </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link to="UQmap"> 
              <a className={classes.block}>
                Qmap
              </a>
            </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
             <Link to="allocationReport"> 
              <a className={classes.block}>
                Allocation Report
              </a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link to="staffReport"> 
              <a className={classes.block}>
                Staff Report
              </a>
            </Link>
            </ListItem>
             <ListItem className={classes.inlineBlock}>
            <Link to="calendar"> 
              <a className={classes.block}>
                Calendar
              </a>
            </Link>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://s4305352-deco7180.uqcloud.net/deco7381/index.php"
              target="_blank"
              className={classes.a}
            >
              Team Solomid
            </a>
            , made with love for a better web
          </span>
        </p>
      </div>
    </footer>
  );
}
