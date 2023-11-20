import { AiOutlineDashboard, AiOutlineLogout, AiOutlineCalendar, AiFillSignal} from "react-icons/ai";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaTimes} from 'react-icons/fa'
import { A, BoxLogo, Li, Logout, Nav, Span, SpanIcon, Ul} from "./styles";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export default function SideBar({active}) {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return(
      <Nav> 
            <BoxLogo><AiFillSignal size={40} /></BoxLogo>
        <Ul>
            <Li>
                <A href="/home">
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
                    <A href="" Text="Sair" onClick={() => [signout(), navigate("/")]}>
                        <SpanIcon><AiOutlineLogout size={33}/></SpanIcon>
                        <Span>Sair</Span>
                    </A>
                </Li>
            </Logout>
        </Ul>
      </Nav>
    )
}