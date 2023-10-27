import styled from "styled-components";

export const Main = styled.div`
    width: 17%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(18,25,41);
    background: linear-gradient(157deg, rgba(83,99,112,1) 0%, rgba(41,52,71,1) 50%, rgba(18,25,41,1) 100%);
`
export const Header = styled.div`
    width: 100%;
    height: 320px;
`
export const Logo = styled.div`
    width: 160px;
    height: 160px;
    background-color: black;
    border-radius: 50%;
    margin: auto;
    margin-top: 40px;
`
export const H3 = styled.h3`
    font-weight: 400;
    font-size: 18px;
    color: white;
    text-align: center;
    margin: 6px;
`
export const Nav = styled.div`
    width: 100%;
    height:100%;
`
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 90px;
    :hover{
        background-color: rgba(160, 161, 160, 0.2);
        transition: 0.8s;
    }
`
export const A = styled.a`
    display: flex;
    align-items: center;
    margin-top: 5px;
    padding-left: 25px;
    :hover{
        background-color: transparent;
    }
`
export const Li = styled.span`
    color: #FCFBFA;
    font-size: 18px;
    margin: 13px;
    font-weight: 400;
    :hover{
        background-color: transparent;
    }
`