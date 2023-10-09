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
          <Grid
            item
            xs={4}
            component={Link}
            to="https://rog.asus.com/articles/gaming-graphics-cards/the-rog-matrix-geforce-rtx-4090-sets-eight-overclocking-records-and-you-can-get-yours-now/"
            sx={{ overflow: "hidden", height: 550 }}
          >
            <img src="/images/stories1.webp" alt="" className="cardZoom cardStoriesTop" />
          </Grid>
          <Grid
            item
            xs={4}
            component={Link}
            to="https://rog.asus.com/articles/rog-gaming-laptops/hands-on-the-rog-strix-scar-18-gaming-laptop-packs-a-big-screen-in-a-nimble-chassis/"
            sx={{ overflow: "hidden", height: 550 }}
          >
            <img src="/images/stories2.webp" alt="" className="cardZoom cardStoriesTop" />
          </Grid>
          <Grid
            item
            xs={4}
            component={Link}
            to="https://rog.asus.com/articles/hands-on/hands-on-the-rog-raikiri-pro-took-my-couch-gaming-to-the-next-level/"
            sx={{ overflow: "hidden", height: 550 }}
            display={{xs:'flex',sm:'none',md:'flex'}}
          >
            <img src="/images/stories3.webp" alt="" className="cardZoom cardStoriesTop" />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ px: 4, maxWidth: "100%" }}
          columns={{ xs: 4, sm: 12 }}
        >
          <Grid
            item
            xs={6}
            component={Link}
            to="https://rog.asus.com/articles/maximus-motherboards/new-z790-motherboards-from-rog-pave-the-way-for-next-gen-intel-core-cpus/"
            sx={{ overflow: "hidden", height: 550 }}
          >
            <img src="/images/stories4.webp" alt="" className="cardZoom cardStoriesBottom" />
          </Grid>
          <Grid
            item
            xs={6}
            component={Link}
            to="https://rog.asus.com/articles/gaming-monitors/ultrawide-and-ultrafast-meet-the-rog-swift-oled-pg34wcdm/"
            sx={{ overflow: "hidden", height: 550 }}
          >
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
            sx={{ p: 5, color: "red", textDecoration: "none" }}
          >
            <Box>
              Learn more
              <ArrowForwardIosIcon />
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
