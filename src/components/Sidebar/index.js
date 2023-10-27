import React from "react";
import { A, H3, Header, Li, Logo, Main, Nav, Ul } from "./styles";
import { AiFillDashboard } from "react-icons/ai";

export default function SideBar() {
    return(
        <>
        <Main>
           <Header>
            <Logo></Logo>
            <H3>NOME DO PROJETO</H3>
           </Header>
           <Nav>
                <Ul>
                    <A href="">
                        <AiFillDashboard size={33} color="white"/>
                        <Li>Dash</Li>
                    </A>                                                                                                                              
                    <A href="">
                        <AiFillDashboard size={33} color="white"/>
                        <Li>Finanças</Li>
                    </A>                                                                                                                              
                    <A href="">
                        <AiFillDashboard size={33} color="white"/>
                        <Li>Relatório</Li>
                    </A>                                                                                                                              
                    <A href="">
                        <AiFillDashboard size={33} color="white"/>
                        <Li>Usuário</Li>
                    </A>                                                                                                                              
                    <A href="">
                        <AiFillDashboard size={33} color="white"/>
                        <Li>Sair</Li>
                    </A>                                                                                                                              
                </Ul>
           </Nav>
        </Main>
        </>
    )
}