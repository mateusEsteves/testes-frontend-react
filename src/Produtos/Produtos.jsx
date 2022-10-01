import { Grid, Container, Box } from "@mui/material";
import { ListaProdutos } from "../util/produtos";
import CardProduto from "../components/CardProduto/CardProduto";
import Carrinho from "../components/Carrinho/Carrinho";

export default function Produtos() {
  const produtos = ListaProdutos;

  return (
    <Grid container>
      <Grid item xs={8}>
        <Container>
          <Grid container spacing={2}>
            {produtos.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <CardProduto item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={4}>
        <Box>
          <Carrinho />
        </Box>
      </Grid>
    </Grid>
  );
}
