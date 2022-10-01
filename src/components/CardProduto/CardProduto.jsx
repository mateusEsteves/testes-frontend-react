import { Button, Card, CardMedia, Typography } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { CarrinhoContext } from "../Carrinho/CarrinhoContext";
import SeletorQuantidade from "../SeletorQuantidade/SeletorQuantidade";
import { Stack } from "@mui/system";

export default function CardProduto({ item }) {
  const { adicionarItem } = useContext(CarrinhoContext);
  const [quantidade, setQuantidade] = useState(0);

  const adicionar = useCallback(() => {
    adicionarItem({
      ...item,
      quantidade,
    });
  }, [item, quantidade]);

  return (
    <Card sx={{ padding: 2 }}>
      <Stack spacing={2}>
        <Typography variant="subtitle2">{item.nome}</Typography>

        <CardMedia
          component="img"
          height="194"
          image={item.imagem}
          alt="imagem exemplo"
        />

        <Typography variant="body1">{item.descricao}</Typography>

        <SeletorQuantidade onChange={setQuantidade} />
        <Button
          fullWidth={true}
          variant="contained"
          size="small"
          onClick={adicionar}
        >
          Adicionar
        </Button>
      </Stack>
    </Card>
  );
}
