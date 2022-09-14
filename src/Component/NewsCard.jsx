import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NewsViewPopup from "./NewsViewPopup";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://www.borouge.com/MediaCentre/Images1/News-Website-banner-V1.JPG')`,
    height: "350px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffff",
    fontSize: "4rem",
    marginBottom: "2%",
  },
  CardMedia: {
    height: 100,
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
export default function NewsCard(props) {
  const classes = useStyles();
  const [newsRecordForView, setnewsRecordForView] = useState(null);
  const [openNewsPopup, setOpenNewsPopup] = useState(false);
  
  const [value, setvalue] = useState([]);
    useEffect(() => {
      // setvalue(props)
      // console.log(value)
    }, []);

  const openInNewsPopup = async (id) => {
    console.log(id)
    setnewsRecordForView(id);
    setOpenNewsPopup(true);
  };
  return (
    <Grid item className={classes.card}>
      <Card>
        <CardContent>
          <CardMedia
            className={classes.CardMedia}
            image={props.image}
          ></CardMedia>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", marginTop: "1%" }}
          >
            {props.title}
          </Typography>
          <Typography variant="subtitile1" paragraph>
            {props.description}
          </Typography>
          <Button
            className={classes.ReadBtn}
            color="secondary"
            onClick={() => openInNewsPopup(props._id)}
          >
            Read more
          </Button>
          <NewsViewPopup
          openNewsPopup={openNewsPopup}
          setOpenNewsPopup={setOpenNewsPopup}
          newsRecordForView={newsRecordForView}
        ></NewsViewPopup>
        </CardContent>
        
      </Card>
    </Grid>
  );
}
