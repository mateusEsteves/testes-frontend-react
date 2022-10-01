import { Grid, Container, Box } from "@mui/material";
import { ListaProdutos } from "../util/produtos";
import CardProduto from "../components/CardProduto/CardProduto";
import Carrinho from "../components/Carrinho/Carrinho";

export default function Produtos() {
  const produtos = ListaProdutos;

  return (
    <Grid container padding={2}>
      <Grid item xs={9.5}>
        <Container>
          <Grid container spacing={2}>
            {produtos.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <CardProduto item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={2.5}>
        <Box>
          <Carrinho />
        </Box>
      </Grid>
    </Grid>
  );
}
