import React from "react";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa";
import { BoxItens, Div, Itens } from "./styles";

export default function GridItem({ item, onDelete }) {
    return (
        <>
            <BoxItens>
                <Itens>{item.desc}</Itens>
                <Itens>{item.amount}</Itens>
                <Itens>
                    {item.expense ? (
                        <FaRegArrowAltCircleDown color="red" />
                    ) : (
                        <FaRegArrowAltCircleUp color="green" />
                    )}
                    <Div>
                        <FaTrash onClick={() => onDelete(item.id)} />
                    </Div>
                </Itens>
            </BoxItens>
        </>
    )
}