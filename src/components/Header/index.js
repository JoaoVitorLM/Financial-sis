import React from "react";
import { Container, H1 } from "./styles";

export default function Header(props) {
    return(
        <>
        <Container>
            <H1>{props.name}</H1>
        </Container>
        </>
    )
}