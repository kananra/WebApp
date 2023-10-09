import { Box, Grid } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductCard from "./ProductCard";
import { useAppSelector } from "../../app/store/configureStore";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const { productsLoaded } = useAppSelector((state) => state.catalog);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} direction={{ xs: "column", sm: "row" }} >
        {products.map((product) => (
          <Grid item xs={10} sm={6} md={5} lg={4} key={product.id}  >
            {!productsLoaded ? <ProductCardSkeleton /> : <ProductCard product={product} />}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
