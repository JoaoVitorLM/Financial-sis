import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
`
export const BoxGrid = styled.div`
    max-width: 1100px;
    min-height: 500px;
    box-shadow: 0px 0px 4px 2px ;
    border-radius: 9px;
    margin: auto;
    margin-top: 26px;

    @media screen and (max-width: 1500px) {
        max-width: 800px;
    }
    @media screen and (max-width: 880px) {
        max-width: 500px;
    }
`
export const Container = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
`
export const Title = styled.div`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
`

