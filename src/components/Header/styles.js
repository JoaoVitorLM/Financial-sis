import styled from "styled-components";

export const Container = styled.div`
    max-width: 1300px;
    margin: auto;
    margin-top: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1500px) {
        max-width: 1000px;
    }
    @media screen and (max-width: 1130px) {
        max-width: 720px;
    }
    @media screen and (max-width: 880px) {
        max-width: 400px;
    }
`
export const H1 = styled.h1`
    font-weight: 400;  
    font-size: 41px;
    display: inline-block;
`
