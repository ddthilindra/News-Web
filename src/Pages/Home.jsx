import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import image from "../assets/News-banner.jpg";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  GridList,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import NewsCard from "../Component/NewsCard";

//https://www.borouge.com/MediaCentre/Images1/News-Website-banner-V1.JPG
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



export default function Home() {
  const classes = useStyles();
  const [news, setnews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/news/getAllNews")
      .then((res) => {
        if (res.data.code == 200 && res.data.success == true) {
          setnews(res.data.data);
        } else {
          window.alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Box className={classes.hero}>
        <Box>Breaking News</Box>
      </Box>
      <div style={{ margin: "5% 5% 5% 5%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={4}>
            <Container>
              <Box style={{ "background-color": "#d71921" }}>
                <Typography variant="h4" color="secondary">
                  Top Series
                </Typography>
              </Box>
              <Divider />
              <Grid>
                {news.map((data) => (
                  <NewsCard {...data} />
                ))}
              </Grid>
            </Container>
          </Grid>
          <Grid xs={4}>
            <Container>
              <Box style={{ "background-color": "#d71921" }}>
                <Typography variant="h4" color="secondary">
                  Top Series
                </Typography>
              </Box>
              <Divider />
              <Grid>
                {news.map((data) => (
                  <NewsCard {...data} />
                ))}
              </Grid>
            </Container>
          </Grid>
          <Grid xs={4}>
            <Container>
              <Box style={{ "background-color": "#d71921" }}>
                <Typography variant="h4" color="secondary">
                  Top Series
                </Typography>
              </Box>
              <Divider />
              <Grid>
                {news.map((data) => (
                  <NewsCard {...data} />
                ))}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const newsData = [
  {
    title: "News1",
    desc: "asdasdasdas asdasdasd asdasd asd a sd as dasd    asd as d  asd as dasdasdasd  asdasdas",
    imageUrl:
      "https://www.borouge.com/MediaCentre/Images1/News-Website-banner-V1.JPG",
  },
  {
    title: "News1",
    desc: "asdasdasdas asdasdasd asdasd asd a sd as dasd    asd as d  asd as dasdasdasd  asdasdas",
  },
];
