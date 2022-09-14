import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NewsCard from "../Component/NewsCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://sport.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/sport-active-part-erasmus-plus-crop.jpg?h=5dabf909&itok=JM-JNmjy')`,
    height: "100px",
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
    width: 180,
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
    marginTop: "2%",
  },
}));

export default function SportNews() {
  const classes = useStyles();
  const [news, setnews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/news/getNewsByCategory/Sport`)

      .then((res) => {
        console.log("Getting from:", res.data.data[0]);
        setnews(res.data.data);
        
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Box className={classes.hero}>
        <Box>Sport News</Box>
      </Box>
      <div style={{"margin":"5% 5% 5% 5%"}}>
      <Container>
        <Box style={{ "background-color": "#d71921" }}>
          
        </Box>
        <Divider />
        <Grid>
          {news.map((data) => (
            <NewsCard {...data} />
            
          ))}
        </Grid>
      </Container>
      </div>
    </>
  );
}


