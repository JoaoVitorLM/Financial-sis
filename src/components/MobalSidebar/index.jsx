import React from 'react'
import { A, Container, Content, Li, Logout, Span, SpanIcon, Ul } from './styles'
import { AiOutlineDashboard, AiOutlineLogout, AiOutlineCalendar, AiFillSignal} from "react-icons/ai";
import { FaTimes} from 'react-icons/fa'
import { HiBars3CenterLeft } from "react-icons/hi2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const SidebarMobal = ({ active }) => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    const closeSidebar = () => {
        active(false)
    }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
      <Ul>
            <Li>
                <A href="/">
                    <SpanIcon><AiOutlineDashboard size={39} /></SpanIcon>
                    <Span>Dashboard</Span>
                </A>
            </Li>
            <Li>
                <A href="/transações">
                    <SpanIcon><HiBars3CenterLeft size={34}/></SpanIcon>
                    <Span>Transações</Span>
                </A>
            </Li>
            <Li>
                <A href="/calendário">
                    <SpanIcon><AiOutlineCalendar size={34}/></SpanIcon>
                    <Span>Calendário</Span>
                </A>
            </Li>
            <Logout>
                <Li>
                    <A href="" Text="Sair" onClick={() => [signout(), navigate("/*")]}>
                        <SpanIcon><AiOutlineLogout size={33}/></SpanIcon>
                        <Span>Sair</Span>
                    </A>
                </Li>
            </Logout>
        </Ul>
      </Content>
    </Container>
  )
}

export default SidebarMobal