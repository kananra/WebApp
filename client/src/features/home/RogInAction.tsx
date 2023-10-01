import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function RogInAction() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        ROG IN ACTION
      </Typography>
      <Grid container sx={{ p: 4 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid
          item
          xs={4}
          className="newsHover"
          component={NavLink}
          to="https://rog.asus.com/articles/gaming/the-best-rog-ally-games-to-play-in-short-bursts/"
          sx={{ textDecoration: "none", color:'inherit' }}
        >
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="/images/news1.webp"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>

          <Typography
            variant="h5"
            fontSize={20}
            fontWeight={500}
            sx={{ color: "red", display: "flex", alignItems: "center" }}
          >
            <LabelImportantIcon />
            GAMING
          </Typography>
          <Typography className="overflowText" variant="h6">
            The best ROG Ally games to play in short bursts
          </Typography>
          <Typography className="overflowText" variant="subtitle1" sx={{ maxWidth: "500px" }}>
            Sometimes you have a few hours to game, sometimes you have 10-15 minutes to squeeze
            something in. Handhelds like the ROG Ally are perfect for those quick sessions.
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          className="newsHover"
          component={NavLink}
          to="https://rog.asus.com/articles/gaming/the-best-rog-ally-games-to-play-in-short-bursts/"
          sx={{ textDecoration: "none", color:'inherit' }}
        >
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="/images/news2.webp"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>

          <Typography
            variant="h5"
            fontSize={20}
            fontWeight={500}
            sx={{ color: "red", display: "flex", alignItems: "center" }}
          >
            <LabelImportantIcon />
            GAMING
          </Typography>
          <Typography className="overflowText" variant="h6">
            ROG and Opera join forces for a special edition of Opera GX, the browser for gamers
          </Typography>
          <Typography className="overflowText" variant="subtitle1" sx={{ maxWidth: "500px" }}>
            The Opera GX ROG Edition browser is loaded with game-changing features like ASUS Aura
            Sync integration.
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          className="newsHover"
          component={NavLink}
          to="https://rog.asus.com/articles/gaming/the-best-rog-ally-games-to-play-in-short-bursts/"
          sx={{ textDecoration: "none",color:'inherit'  }}
        >
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="/images/news3.webp"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>

          <Typography
            variant="h5"
            fontSize={20}
            fontWeight={500}
            sx={{ color: "red", display: "flex", alignItems: "center" }}
          >
            <LabelImportantIcon />
            GAMING
          </Typography>
          <Typography className="overflowText" variant="h6">
            The best retro and retro revival games for the ROG Ally
          </Typography>
          <Typography className="overflowText" variant="subtitle1" sx={{ maxWidth: "500px"}}>
            The ROG Ally can play modern AAA games with excellent fidelity and performance, but
            sometimes you just want a blast from the past.
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Typography
          component={NavLink}
          to="/"
          variant="h5"
          textAlign="center"
          fontWeight="500"
          sx={{ p: 5, color: "red", textDecoration: "none" }}
        >
          <Box>
            Learn more
            <ArrowForwardIosIcon />
          </Box>
        </Typography>
      </Grid>
    </>
  );
}
