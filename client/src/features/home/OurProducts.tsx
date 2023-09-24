import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function OurProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "1450px", margin: "0 auto" }}>
      <Typography variant="h2" textAlign="center" fontWeight="500" sx={{ mt: 4, mb: 4 }}>
        Explore Our Products
      </Typography>
      <Slider {...settings}>
        <Grid sx={{ mx: 3, my: 3, textDecoration: "none" }} component={Link} to="https://rog.asus.com/laptops-group/">
          <img src="images/laptops.png" alt="" />
          <Typography variant="h6" textAlign="center" sx={{ color: "black" }}>
            Laptops
          </Typography>
        </Grid>
        <Grid sx={{ mx: 3, my: 3,textDecoration: "none" }} component={Link} to='https://rog.asus.com/motherboards-group/'>
          <img src="images/motherboards.png" alt="" />
          <Typography variant="h6" textAlign="center" sx={{ color: "black" }}>
            Motherboards
          </Typography>
        </Grid>
        <Grid sx={{ mx: 3, my: 3,textDecoration: "none" }} component={Link} to='https://rog.asus.com/graphics-cards-group/'>
          <img src="images/graphiccards.png" alt="" />
          <Typography variant="h6" textAlign="center" sx={{ color: "black" }}>
            Graphics Cards
          </Typography>
        </Grid>
        <Grid sx={{ mx: 3, my: 3,textDecoration: "none" }} component={Link} to='https://rog.asus.com/monitors-group/'>
          <img src="images/monitors.png" alt="" />
          <Typography variant="h6" textAlign="center" sx={{ color: "black" }}>
            Monitors
          </Typography>
        </Grid>
        <Grid sx={{ mx: 3, my: 3,textDecoration: "none" }} component={Link} to='https://rog.asus.com/phones-group/allmodels'>
          <img src="images/phones.png" alt="" />
          <Typography variant="h6" textAlign="center" sx={{ color: "black" }}>
            Phones
          </Typography>
        </Grid>
      </Slider>
    </div>
  );
}
