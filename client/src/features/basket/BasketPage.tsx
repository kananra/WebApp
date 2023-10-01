import { Button, Grid, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import {useAppSelector } from "../../app/store/configureStore";
import BasketTable from "./BasketTable";


export default function BasketPage() {
  const { basket } = useAppSelector(state => state.basket);


  if (!basket) return <Typography variant="h3">Your basket is empty</Typography>
  if (basket.items.length === 0) return <Typography variant="h3">Your basket is empty</Typography>

  return (
    <>
    
     <BasketTable items={basket.items}/>
      <Grid container sx={{marginBottom:'200px' }}>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
          <Button
            component={Link}
            to='/checkout'
            variant="outlined"
            size="large"
            fullWidth
            sx={{color:'inherit',backgroundColor:'inherit',border:'2px solid blue'}}
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>

  )
}