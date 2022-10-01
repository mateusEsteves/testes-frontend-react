import { Button, Card, TextField, Alert, AlertTitle } from "@mui/material";
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
    <>
      <div
        style={{
          maxWidth: "400px",
          maxHeight: "600px",
        }}
      >
        <Card
          style={{
            padding: "32px",
          }}
        >
          <TextField
            variant="standard"
            type="text"
            label="Email"
            style={{ display: "block", marginBottom: "24px" }}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="standard"
            type="password"
            label="Password"
            style={{ display: "block", marginBottom: "24px" }}
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => entrar(email, password)}>Entrar</Button>
        </Card>

        {error && (
          <Alert severity="error" style={{ marginTop: "20px" }}>
            Verifique seu usuário e senha
          </Alert>
        )}
      </div>
    </>
  );
}
