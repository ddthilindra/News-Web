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
import GallerImageCard from "../Component/GallerImageCard";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://onextrapixel.com/wp-content/uploads/2017/03/flow-gallery.jpg')`,
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

export default function Gallery() {
  const classes = useStyles();
  const [news, setnews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/news/getAllNews`)

      .then((res) => {
        console.log("Getting from:", res.data.data);
        setnews(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Box className={classes.hero}>
        <Box>Gallery</Box>
      </Box>
      <div style={{ margin: "5% 5% 5% 5%" }}>
        <Container>
          <Divider />
          <Grid container spacing={3}>
            {news.map((data) => (
              <Grid item key={data.id} md={3} xs={12} sm={6} lg={4}>
              <GallerImageCard image={data.image}/>
                {/* <NewsCard imgs={data.image} /> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}


