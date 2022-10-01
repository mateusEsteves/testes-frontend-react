import { Grid, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./SeletorQuantidade.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";

export default function SeletorQuantidade({ onChange }) {
  const [quantidade, setQuantidade] = useState(0);
  useEffect(() => onChange(quantidade), [quantidade, onChange]);

  const aumentarQuantidade = () => setQuantidade((state) => state + 1);
  const diminuirQuantidade = () => setQuantidade((state) => state - 1);

  return (
    <Grid container className={styles.seletorQuantidade__botao}>
      <Grid item xs={2} className={styles.seletorQuantidade__botao}>
        <IconButton color="primary" onClick={diminuirQuantidade}>
          <DoNotDisturbOnIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item xs={8}>
        <TextField
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          className={styles.seletorQuantidade__input}
        />
      </Grid>
      <Grid item xs={2} className={styles.seletorQuantidade__botao}>
        <IconButton color="primary" onClick={aumentarQuantidade}>
          <AddCircleIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
