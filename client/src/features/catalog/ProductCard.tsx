import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/Product";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { currencyFormat } from "../../app/util/util";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync } from "../basket/basketSlice";


interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const cardStyle = {
    display: "block",
    width: "100%",
    height: "390px",
    paddingTop: "15px",
    boxShadow:'0 3px 10px rgb(0 11 237 / 0.3)'
  };

  

  return (
    <>
        <Card style={cardStyle} className="res">
          <CardMedia
            sx={{ width: "100%", height: 160, backgroundSize: "contain" }}
            image={product.pictureUrl}
            title={product.name}
          />
          <CardHeader
            title={product.name}
            titleTypographyProps={{
              sx: { color: "inherit", fontSize: "15px", width: "250px", height: "40px" },
            }}
          />
          <CardContent>
            <Typography gutterBottom color="inherit" variant="h6" sx={{ mt: "-10px" }}>
              {currencyFormat(product.price)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ width: "250px" }}>
              {product.brand} / {product.type}
            </Typography>
          </CardContent>
          <CardActions>
            <LoadingButton
              sx={{
                border: "3px solid blue",
                backgroundColor: "inherit",
                color: "inherit",
                borderRadius: "10px",
                marginRight: "5px",
                width: "110px",
              }}
              loading={status === "pendingAddItem" + product.id}
              onClick={() => dispatch(addBasketItemAsync({ productId: product.id }))}
              size="small"
            >
              Add to Cart
            </LoadingButton>
            <Button
              component={Link}
              to={`/catalog/${product.id}`}
              size="small"
              sx={{
                border: "3px solid blue",
                backgroundColor: "inherit",
                color: "inherit",
                borderRadius: "10px",
              }}
            >
              View
            </Button>
          </CardActions>
        </Card>
    </>
  );
}
