import styled from "styled-components";

export const Section = styled.div`
    max-width: 1400px;
    min-height: 720px;
    margin: auto;
    margin-top: 40px;
    border-radius: 7px;

    @media screen and (max-width: 1500px) {
        max-width: 800px;
    }
    @media screen and (max-width: 880px) {
        max-width: 500px;
    }
`