import React from "react";
import { BoxGrid, Container, Main, Title } from "./styles";
import GridItem from "../GridItem";

export default function Grid({ itens, setItens }) {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    }
    return (
        <>
        <Main>
            <BoxGrid>
                <Container>
                    <Title>Descrição</Title>
                    <Title>Valor</Title>
                    <Title>Tipo</Title>
                </Container>
                <div>
                    {itens?.map((item, index) => (
                        <GridItem key={index} item={item} onDelete={onDelete} />
                    ))}
                </div>
            </BoxGrid>
        </Main>  
        </>
    )
}