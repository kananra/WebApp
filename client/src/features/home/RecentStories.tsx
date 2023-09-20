import { Box, Grid, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function RecentStories() {
  return (
    <>
      <Grid
        sx={{
          backgroundImage: 'url( "/images/rog_bg_pattern.jpg")',
          height: "auto",
          px: 5,
          maxWidth: "100%",
        }}
      >
        <Typography variant="h3" textAlign="center" fontWeight="500" sx={{ p: 5, color: "white" }}>
          Recent Stories
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ mb: 3, px: 4, maxWidth: "100%" }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} component={Link} to="/" sx={{ overflow: "hidden", height: 550 }}>
            <img src="/images/stories1.webp" alt="" className="cardZoom cardStoriesTop" />
          </Grid>
          <Grid item xs={4} sx={{ overflow: "hidden", height: 550 }}>
            <img src="/images/stories2.webp" alt="" className="cardZoom cardStoriesTop" />
          </Grid>
          <Grid item xs={4} sx={{ overflow: "hidden", height: 550 }}>
            <img src="/images/stories3.webp" alt="" className="cardZoom cardStoriesTop" />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ px: 4, maxWidth: "100%" }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6} sx={{ overflow: "hidden", height: 550 }}>
            <img src="/images/stories4.webp" alt="" className="cardZoom cardStoriesBottom" />
          </Grid>
          <Grid item xs={6} sx={{ overflow: "hidden", height: 550 }}>
            <img src="/images/stories5.webp" alt="" className="cardZoom cardStoriesBottom" />
          </Grid>
        </Grid>
        <Grid>
          <Typography
            component={NavLink}
            to="/"
            variant="h5"
            textAlign="center"
            fontWeight="500"
            sx={{ p: 5, color: "red",textDecoration:'none' }}
          >
            <Box >
              Learn more
              <ArrowForwardIosIcon />
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
