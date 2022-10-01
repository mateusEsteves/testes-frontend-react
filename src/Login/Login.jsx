import {
  Button,
  Card,
  TextField,
  Alert,
  AlertTitle,
  Container,
  Box,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const entrar = async (email, password) => {
    try {
      const dadosUsuario = await login(email, password);
      sessionStorage.setItem("nomeUsuario", dadosUsuario.name);

      navigate("/produtos");
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <Container
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Box minWidth={400}>
        <Card sx={{ padding: 4 }}>
          <Stack spacing={3}>
            <TextField
              variant="standard"
              type="text"
              label="Email"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="standard"
              type="password"
              label="Password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={() => entrar(email, password)} fullWidth variant="contained">
              Entrar
            </Button>
          </Stack>
        </Card>

        {error && (
          <Alert severity="error" style={{ marginTop: "20px" }}>
            Verifique seu usuário e senha
          </Alert>
        )}
      </Box>
    </Container>
  );
}
