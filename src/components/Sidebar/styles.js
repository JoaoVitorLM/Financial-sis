import styled from "styled-components";

export const Nav = styled.div`
    height: 100vh;
    width: 78px;
    box-shadow: 1px 0 5px #820ABF;
    overflow: hidden;

    &:hover{
        width: 220px;
        transition: all 0.7s;
    }

    @media screen and (max-width: 1130px) {
        display: none;
    }
`
export const BoxLogo = styled.div`
   width: 65px;
   height: 65px;
   border-radius: 50%;
   background-color: #820ABF;
   margin-top: 33px;
   margin-left: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
`
export const Ul = styled.ul`
    margin-left: 16px;
`
export const Li = styled.li`
`
export const A = styled.a`     
    color: #5A7482; 
    font-size: 19px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    padding: 3px;

    &:hover{
        border-left: 2px solid #820ABF;
        transition: ease 500ms  ;
        margin-left: 5px;
    }
`
export const Span = styled.span`  
    margin-left: 22px;

    @media screen and (max-width: 1130px) {
        margin-left: 19px;
    }
`
export const SpanAdd = styled.span`  
    margin-left: 18px;
`
export const Logo = styled.span`  
    margin-left: 0;
    font-size: 22px;
    font-weight: bold;
`
export const SpanIcon = styled.span`  
    svg{
        color: var(--text_color);
    }
`
export const Al = styled.span`  
    flex: 1;
`
export const Logout = styled.div`  
    margin-top: 570px;
`