import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
export const Body = styled.div`
    width: 100%;
    height: 100vh;
`
export const BoxGrid = styled.div`
    max-width: 1100px;
    min-height: 420px;
    box-shadow: 0px 0px 4px 2px rgb(83,99,112);
    border-radius: 9px;
    margin-left: 105px;
    margin-top: 26px;
    border-radius: 9px;
`
export const BoxChart = styled.div`
    max-width: 800px;
    height: 450px;
    margin: auto;
    margin-top: 50px; 
    
    @media screen and (max-width: 880px) {
        max-width: 500px;
    }
`






