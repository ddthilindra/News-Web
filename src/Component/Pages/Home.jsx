import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import image from "../../assets/News-banner.jpg";
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

//https://www.borouge.com/MediaCentre/Images1/News-Website-banner-V1.JPG
const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../../assets/News-banner.jpg')`,
    height: "500px",
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

function News({ title, desc, imageAlt, imageUrl, tag, links }) {
  const classes = useStyles();
  return (
    <Grid item className={classes.card}>
      <Card>
        <CardContent>
          <CardMedia className={classes.CardMedia} image={imageUrl}></CardMedia>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", marginTop: "1%" }}
          >
            {title}
          </Typography>
          <Typography variant="subtitile1" paragraph>
            {desc}
          </Typography>
          <Button className={classes.ReadBtn} color="secondary">
            Read more
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.hero}>
        <Box>Breaking News</Box>
      </Box>
      <div style={{"margin":"5% 5% 5% 5%"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={4}>
          <Container>
            <Box style={{"background-color":"#d71921"}} >
              <Typography variant="h4" color="secondary" >Top Series</Typography>
            </Box>
              <Divider />
            <Grid>
              {newsData.map((data) => (
                <News {...data} />
              ))}
            </Grid>
          </Container>
        </Grid>
        <Grid xs={4}>
          <Container>
          <Box style={{"background-color":"#d71921"}} >
              <Typography variant="h4" color="secondary" >Top Series</Typography>
            </Box>
              <Divider />
            <Grid>
              {newsData.map((data) => (
                <News {...data} />
              ))}
            </Grid>
          </Container>
        </Grid>
        <Grid xs={4}>
          <Container>
          <Box style={{"background-color":"#d71921"}} >
              <Typography variant="h4" color="secondary" >Top Series</Typography>
            </Box>
              <Divider />
            <Grid>
              {newsData.map((data) => (
                <News {...data} />
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
