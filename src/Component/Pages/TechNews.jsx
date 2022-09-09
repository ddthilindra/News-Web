import { Box, Button, Card, CardContent, CardMedia, Container, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

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

  const useStyles = makeStyles((theme) => ({
    hero: {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../../assets/News-banner.jpg')`,
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
  return (
    <>
      <Box className={classes.hero}>
        <Box>Tech News</Box>
      </Box>
      <Container>
        <Box style={{ "background-color": "#d71921" }}>
          <Typography variant="h4" color="secondary">
            Top Series
          </Typography>
        </Box>
        <Divider />
        <Grid>
          {newsData.map((data) => (
            <News {...data} />
          ))}
        </Grid>
      </Container>
    </>
  )
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
