import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
`
export const BoxValue = styled.div`
    max-width: 1320px;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 39px;

    @media screen and (max-width: 1500px) {
        max-width: 900px;
    }
    @media screen and (max-width: 1130px) {
        max-width: 800px;
    }
    @media screen and (max-width: 880px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const Box = styled.div`
    width: 360px;
    height: 110px;
    border-radius: 19px;
    background-color: rgba(0 , 0 , 0 , 0.1);
    box-shadow: 0 1px 2px;

    @media screen and (max-width: 1500px) {
        width: 280px;
    }
    @media screen and (max-width: 1130px) {
        width: 250px;
    }
    @media screen and (max-width: 880px) {
        margin: 10px;
    }
`
export const H3 = styled.h3`
    padding: 10px;
    font-weight: 400;
    font-size: 21px;
`
export const P = styled.p`
    text-align: center;
    font-size: 29px;
    font-weight: 400;
`
export const Icon = styled.div`
    text-align: end;
    margin-right: 5px;
    margin-top: -7px;
    margin-right: 6px;
`