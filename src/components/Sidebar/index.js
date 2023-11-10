import React, { createContext, useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillDashboard, AiOutlineLogout} from "react-icons/ai";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { BiSolidReport } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { A, BoxImg, Button, ButtonAdd, Img, Li, Nav, Span, SpanAdd, SpanIcon, SpanIconAdd } from "./styles";


const SideBarContext = createContext()


export default function SideBar() {
    const [expanded,setExpanded] = useState(true)


    return(
      <Nav>
            <BoxImg>
                <Img></Img>
                <Button onClick={() => setExpanded(curr =>!curr)}>
                    {expanded ? <BsFillArrowRightCircleFill size={20} color="white"/> : <BsFillArrowLeftCircleFill size={20} color="white"/>}                     
                </Button>
            </BoxImg>
        <ul>
            <Li>
                <A href="/">
                    <SpanIcon><AiFillDashboard size={35} color="#5A7482"/></SpanIcon>
                    <Span>Dashboard</Span>
                </A>
            </Li>
            <Li>
                <A href="/transações">
                    <SpanIcon><HiBars3CenterLeft size={32} color="#5A7482"/></SpanIcon>
                    <Span>Transações</Span>
                </A>
            </Li>
            <Li>
                <A href="/relatório">
                    <SpanIcon><BiSolidReport size={33} color="#5A7482"/></SpanIcon>
                    <Span>Relatórios</Span>
                </A>
            </Li>
            <Li>
                <A href="/calendário">
                    <SpanIcon><GiNotebook size={33} color="#5A7482"/></SpanIcon>
                    <Span>Calendário</Span>
                </A>
            </Li>
            <Li>
                <A href="">
                    <SpanIcon><AiOutlineLogout size={32} color="#5A7482"/></SpanIcon>
                    <Span>Sair</Span>
                </A>
            </Li>
        </ul>
      </Nav>
    )
}