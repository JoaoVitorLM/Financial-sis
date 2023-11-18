import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
`
export const BoxInput = styled.div`
    max-width: 1200px;
    min-height: 100px;
    border-radius: 9px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    margin-top: 36px;

    @media screen and (max-width: 1500px) {
        max-width: 900px;
    }
    @media screen and (max-width: 1130px) {
        max-width: 780px;
    }
    @media screen and (max-width: 880px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const Input = styled.input`
    width: 300px;
    height: 28px;
    border-radius: 9px;
    border: none;

    @media screen and (max-width: 1500px) {
        width: 250px;
    }
    @media screen and (max-width: 1130px) {
        width: 240px;
    }
    @media screen and (max-width: 880px) {
        margin-top: 5px;
        margin-bottom: 6px;
    }
`
export const BoxES = styled.div`
    margin-top: 21px;
`
export const Checkbox = styled.input`
    margin: 5px;
`
export const Button = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 9px;
    background-color:  #820ABF;
    border: none;
    font-weight: bolder;
    color: white;
    margin-top: 16px;
`