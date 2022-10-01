import { Stack, Typography, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatarMoeda } from "../../util/util";

export default function ProdutoCarrinho({
  nome,
  quantidade,
  valor,
  removerItem,
}) {
  return (
    <Grid container spacing={2} padding={2} marginLeft={0}>
      <Grid item xs={6}>
        <Stack>
          <Typography variant="subtitle2" fontSize="small">
            {nome}
          </Typography>
          <Typography variant="body2" fontSize="small">
            {`Quantidade: ${quantidade}`}
          </Typography>
          <Typography variant="body2" fontSize="small">
            {`Valor: ${formatarMoeda(valor)}`}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <Grid item xs={10}>
            <IconButton color="primary" onClick={removerItem}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle2" fontSize="small">
              {`Total: ${formatarMoeda(valor * quantidade)}`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
