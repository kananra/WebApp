import { Grid, Typography } from "@mui/material";
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
 
      <div style={{ maxWidth: "1450px", margin: "0 auto", }}>
        <Typography variant="h2" textAlign="center" fontWeight="500" sx={{ mt: 4, mb: 4 }}>
          Explore Our Products
        </Typography>
        <Slider {...settings}>
          <Grid sx={{ mx: 3,my:3 }}>
            <img src="images/laptops.png" alt="" />
          </Grid>
          <Grid sx={{ mx: 3,my:3 }}>
            <img src="images/motherboards.png" alt="" />
          </Grid>
          <Grid sx={{ mx: 3,my:3 }}>
            <img src="images/graphiccards.png" alt="" />
          </Grid>
          <Grid sx={{ mx: 3,my:3 }}>
            <img src="images/monitors.png" alt="" />
          </Grid>
          <Grid sx={{ mx: 3,my:3 }}>
            <img src="images/phones.png" alt="" />
          </Grid>
        </Slider>
      </div>
  );
}
