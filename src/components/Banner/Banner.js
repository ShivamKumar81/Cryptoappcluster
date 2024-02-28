import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";


const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner4.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const  Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: 10,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Cluster
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: "black",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get the Real Time Price of your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
