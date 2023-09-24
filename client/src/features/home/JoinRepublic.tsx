import { Box, Grid, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export default function JoinRepublic() {
  return (
    <>
      <Grid container >
        <Grid sx={{position:'relative',textDecoration:'none'}} component={NavLink} to='https://rog.asus.com/rog-saga/'>
          <img
            src="/images/republic.jpeg"
            alt="asus"
            style={{ maxWidth: "100%", height: "100%" }}
          />
          <Box component={Link} to='https://rog.asus.com/rog-saga/'  sx={{textDecoration:'none'}}> 
            <Typography className="pictureText" variant="h4">
                THE ART OF THE ROG UNIVERSE
                 <Typography >
              Technology never sleeps, nor should the action. For those keen on winning power, the
              Republic of Gamers awaits. Driven by relentless innovation, ROG is committed to
              producing out-of-this-world experiences for gamers and enthusiasts everywhere.
            </Typography>
                </Typography>
           
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
