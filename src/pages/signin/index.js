import React from "react";
import { useState } from "react";
import { Container, Content, Label, LabelSignup, Strong } from "./styles";
import Input from "../../components/InputSig";
import Button from "../../components/ButtonSig";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export default function Signin() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/");
  };

  return (
    <>
      <Container>
        <Label>Sistema de login</Label>
        <Content>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <labelError>{error}</labelError>
          <Button Text="Entrar" onClick={handleLogin} />
          <LabelSignup>
            Não tem uma conta?
            <Strong>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </Strong>
          </LabelSignup>
        </Content>
      </Container>
    </>
  )
}