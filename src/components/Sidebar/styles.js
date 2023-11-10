import styled from "styled-components";

export const Nav = styled.div`
    height: 100vh;
    width: 220px;
    background-color: #FFFFFF;
    padding: 40px 0 40px 1%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
`
export const BoxImg = styled.div`
   width: 100%;
   height: 50px;
   background-color: red;
   display: flex;
   align-items: center;
   justify-content: space-between;
`
export const Img = styled.image`
   width: 170px;
   height: 50px;
   background-color: black;
`
export const Button= styled.button`
   background-color: transparent;
   border:1px solid white;
   color: white;
   padding: 2px 4px;
   cursor: pointer;
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
`
export const Span = styled.span`  
    margin-left: 21px;
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
`
export const ButtonAdd = styled.button` 
    width: 140px;
    height: 55px;
    font-size: 17px;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 19px;
    background-color: #6515DD;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg{
        background-color: #6515DD;
        border-radius: 50%;
        padding: 6px;
    }
`
export const Al = styled.span`  
    flex: 1;
`