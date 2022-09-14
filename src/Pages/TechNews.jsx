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
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i0.wp.com/www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg?crop=0px%2C688px%2C2061px%2C687px&w=1920&ssl=1')`,
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
export default function TechNews() {
  const classes = useStyles();
  const [news, setnews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/news/getNewsByCategory/Tech`)

      .then((res) => {
        console.log("Getting from:", res.data.data[0]);
        setnews(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Box className={classes.hero}>
        <Box>Tech News</Box>
      </Box>
      <div style={{ margin: "5% 5% 5% 5%" }}>
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
