import { Card, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    CardMedia: {
      height: 200,
    },
    CardMedia2: {
      height: 300,
    },
    ReadBtn: {
      // marginLeft:"90%"
      backgroundColor: "#d71921",
      "&:hover": {
        backgroundColor: "#ffff",
      },
      "&:hover": {
        color: "#d71921",
      },
    },
    card: {
      marginTop: "5%",
    },
  }));
export default function GallerImageCard(props) {
    const classes = useStyles();
  return (
    <Grid item className={classes.card}>
      <Card>
        <CardContent>
          <CardMedia
            className={classes.CardMedia}
            image={props.image}
          ></CardMedia>

          
        </CardContent>
      </Card>
    </Grid>
  )
}
