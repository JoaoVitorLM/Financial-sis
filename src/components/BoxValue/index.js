import React from "react";
import { Box, BoxValue, H3, Icon, Main, P } from "./styles";
import { FaBalanceScale } from "react-icons/fa";
import {BsFillArrowUpCircleFill ,BsFillArrowDownCircleFill } from "react-icons/bs";

export default function BoxValues({ income, expense, total }) {

    return(
        <>
        <Main>
            <BoxValue>
                <Box>
                    <H3>Entrada</H3>
                    <P>{income}</P>
                    <Icon><BsFillArrowUpCircleFill size={38} color="#1D8338"/></Icon>
                </Box>
                <Box>
                    <H3>Saída</H3>
                    <P>{expense}</P>
                    <Icon><BsFillArrowDownCircleFill size={38} color="red"/></Icon>
                </Box>
                <Box>
                    <H3>Balanço</H3>
                    <P>{ total}</P>
                    <Icon><FaBalanceScale  size={39} color="grey"/></Icon>
                </Box>
            </BoxValue>
        </Main>
        </>
    )
}