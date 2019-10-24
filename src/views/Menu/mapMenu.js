import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "5px",
    "flex-grow": 0,
    "flex-basis": "380px"
  }
});

export default function MapMenu() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to="UQmap">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={require(`../../assets/img/map.jpg`)}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Floor plan
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Choose a building and view the floor plan
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
