import React from "react";
import { useState } from "react";
import { Container, Content, Label, LabelError, LabelSignin, Strong} from "./styles";
import { Link, useNavigate} from "react-router-dom";
import Input from "../../components/InputSig";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/ButtonSig";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signup } = useAuth();

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadatrado com sucesso!");
        navigate("/signin");
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
                        type="email"
                        placeholder="Confirme seu E-mail"
                        value={emailConf}
                        onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                    />
                    <Input
                        type="password"
                        placeholder="Digite sua Senha"
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                    <LabelError>{error}</LabelError>
                    <Button Text="Inscrever-se" onClick={handleSignup} />
                    <LabelSignin>
                        Já tem uma conta?
                        <Strong>
                            <Link to="/signin">&nbsp;Entre</Link>
                        </Strong>
                    </LabelSignin>
                </Content>
            </Container>
        </>
    )
}