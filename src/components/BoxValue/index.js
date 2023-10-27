import React from "react";
import { Box, BoxValue, H3, Icon, P } from "./styles";
import { TbMoneybag } from "react-icons/tb";
import { BiMoney } from "react-icons/bi";
import { FaBalanceScale } from "react-icons/fa";


export default function BoxValues({ income, expense, total }) {

    return(
        <>
        <BoxValue>
            <Box>
                <H3>Entrada</H3>
                <P>{income}</P>
                <Icon><TbMoneybag size={40} color="grey"/></Icon>
            </Box>
            <Box>
                <H3>Saída</H3>
                <P>{expense}</P>
                <Icon><BiMoney size={40} color="grey"/></Icon>
            </Box>
            <Box>
                <H3>Balanço</H3>
                <P>{ total}</P>
                <Icon><FaBalanceScale  size={40} color="grey"/></Icon>
            </Box>
        </BoxValue>
        </>
    )
}