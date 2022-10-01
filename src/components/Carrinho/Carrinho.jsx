import { Stack, Typography, Box, Grid, Button } from "@mui/material";
import { useContext } from "react";
import { CarrinhoContext } from "./CarrinhoContext";

export default function Carrinho() {
  const { removerItem, itens, valorTotal } = useContext(CarrinhoContext);

  if (itens.length === 0) {
    return (
      <Box>
        <Typography variant="body1">Carrinho Vazio</Typography>
      </Box>
    );
  } else {
    return (
      <Stack spacing={1} alignItems="center">
        <HeaderCarrinho />

        {itens.map((i) => (
          <ProdutoCarrinho
            key={i.id}
            nome={i.nome}
            quantidade={i.quantidade}
            valor={i.preco * i.quantidade}
            removerItem={() => removerItem(i)}
          />
        ))}

        <FooterCarrinho valorTotal={valorTotal} />
      </Stack>
    );
  }
}

function HeaderCarrinho() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="subtitle2" fontSize="small">
          Nome
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle2" fontSize="small">
          Quantidade
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle2" fontSize="small">
          Valor
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Box />
      </Grid>
    </Grid>
  );
}

function ProdutoCarrinho({ nome, quantidade, valor, removerItem }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="subtitle2" fontSize="small">
          {nome}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle2" fontSize="small">
          {quantidade}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle2" fontSize="small">
          {valor}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={removerItem}>Remover</Button>
      </Grid>
    </Grid>
  );
}

function FooterCarrinho({ valorTotal }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="subtitle2" fontSize="small">
          Valor total:
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Box />
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle2" fontSize="small">
          {valorTotal}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Box />
      </Grid>
    </Grid>
  );
}
