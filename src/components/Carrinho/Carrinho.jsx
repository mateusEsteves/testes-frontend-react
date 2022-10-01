import { Stack, Typography, Box, Card, Container, Button } from "@mui/material";
import { useContext } from "react";
import { CarrinhoContext } from "./CarrinhoContext";
import ProdutoCarrinho from "../ProdutoCarrinho/ProdutoCarrinho";
import { formatarMoeda } from "../../util/util";

export default function Carrinho() {
  const { removerItem, itens, valorTotal } = useContext(CarrinhoContext);

  return (
    <>
      {itens.length === 0 ? (
        <Card variant="outlined">
          <Container>
            <Typography variant="body1" textAlign="center" paddingY={3}>
              Carrinho Vazio
            </Typography>
          </Container>
        </Card>
      ) : (
        <Stack spacing={2}>
          <Card variant="outlined">
            <Stack alignItems="center">
              {itens.map((i) => (
                <ProdutoCarrinho
                  key={i.id}
                  nome={i.nome}
                  quantidade={i.quantidade}
                  valor={i.preco}
                  removerItem={() => removerItem(i)}
                />
              ))}
              <Container>
                <Box borderTop="1px solid rgba(0, 0, 0, 0.12)" paddingY={1}>
                  <Typography variant="subtitle2" textAlign="center">
                    {`Valor total: ${formatarMoeda(valorTotal)}`}
                  </Typography>
                </Box>
              </Container>
            </Stack>
          </Card>
          <Button variant="contained">Comprar</Button>
        </Stack>
      )}
    </>
  );
}
