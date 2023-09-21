import { Box, Divider, Grid, Typography } from "@mui/material";
import { RiTwitterXFill } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { BiLogoDiscord } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitch } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { RiThreadsLine } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box sx={{ height: 500 }}>
      <Box
        sx={{
          backgroundImage: "url(/images/bgimg.jpeg)",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          px: 6,
        }}
      >
        <Grid container direction={{ xs: "column", md: "row" }} sx={{ p: 4 }}>
          <Grid item xs={6} container direction={{ xs: "column", md: "row" }} spacing={2}>
            <Grid className="newsHover" item xs={3} sx={{ color: "white",textDecoration:'none' }} component={Link} to='https://rog.asus.com/about-rog/'>
              ABOUT ROG
            </Grid>
            <Grid className="newsHover" item xs={3} sx={{ color: "white",textDecoration:'none' }} component={Link} to='/'>
              HOME
            </Grid>
            <Grid className="newsHover" item xs={3} sx={{ color: "white",textDecoration:'none' }}  component={Link} to='https://www.asus.com/News/'>
              NEWSROOM
            </Grid>
            <Grid className="newsHover" item xs={3} sx={{ color: "white",textDecoration:'none' }} component={Link} to='https://www.asus.com/content/accessibility-policy/'>
              Accessibility Help
            </Grid>
          </Grid>

          <Grid
            item
            xs={6}
            container
            direction={{ md: "row" }}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
            className="reslogo"
          >
            <Grid component={Link} to='https://www.facebook.com/rog.central.asia/?brand_redir=405774002387'>
              <FiFacebook className="logoCss newsHover" />
            </Grid>
            <Grid component={Link} to='https://twitter.com/ASUS_ROG' >
              <RiTwitterXFill className="logoCss newsHover" />
            </Grid>
            <Grid component={Link} to='https://discord.com/invite/Sxv2XBpSRc'>
              <BiLogoDiscord className="logoCss newsHover" />
            </Grid>
            <Grid component={Link} to='https://www.youtube.com/channel/UCAaMgASV4htjw3KNqh_vQvA' >
              <AiOutlineYoutube className="logoCss newsHover" />
            </Grid>
            <Grid component={Link} to='https://www.twitch.tv/asusrog'>
              <BsTwitch className="logoCss newsHover" />
            </Grid>
            <Grid component={Link} to='https://www.instagram.com/ASUSROG/'>
              <FaInstagram className="logoCss newsHover" />
            </Grid>
            <Grid component={Link} to='https://www.tiktok.com/@_asusrog'>
              <RiTiktokLine className="logoCss newsHover" />
            </Grid>
            <Grid component={Link} to='https://www.threads.net/@asusrog'>
              <RiThreadsLine className="logoCss newsHover" />
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "white", borderWidth: "medium", mb: 4 }} />
        <Box sx={{display:"flex",justifyContent:'space-between'}} >
            <Grid className="resglo ">
            <Typography sx={{color:'white',textDecoration:'none'}} className="newsHover" component={Link} to='https://rog.asus.com/entry/'>
            <AiOutlineGlobal className="glologo" />
            Global/English
          </Typography>
            </Grid>
            <Box sx={{display:'flex',gap:4}}>
            <Typography sx={{color:'white',textDecoration:'none'}} className="newsHover" component={Link} to='https://rog.asus.com/terms-of-notice/official-site/'>
            Terms of Use Notice
          </Typography>
            <Typography sx={{color:'white',textDecoration:'none'}} className="newsHover" component={Link} to='https://rog.asus.com/terms-of-notice/privacy_policy/'>
            Privacy Policy
          </Typography>
            <Typography sx={{color:'white'}}>
            ©ASUSTeK Computer Inc. All rights reserved.
          </Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}
