import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import image from "../../assets/News-banner.jpg";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://www.borouge.com/MediaCentre/Images1/News-Website-banner-V1.JPG')`,
    height:"500px",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#ffff",
    fontSize:"4rem"
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Box>Breaking News</Box>
    </Box>
  );
}
