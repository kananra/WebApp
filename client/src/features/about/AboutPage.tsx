import { Box, Container, Grid, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth={false} sx={{ maxWidth: "2560px" }}>
      <Grid
        sx={{
          backgroundImage: 'url( "/images/kv_banner.jpg")',
          height: "550px",
          px: 5,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography className="bannerText" variant="h3" textAlign={"center"}>
            ABOUT ASUS
            <Typography>
              ASUS is passionate about technology and driven by innovation. We dream, we dare and we
              strive to create an effortless and joyful digital life for everyone. We're always in
              search of incredible ideas and experiences, and we aspire to deliver the incredible in
              everything we do.
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}
