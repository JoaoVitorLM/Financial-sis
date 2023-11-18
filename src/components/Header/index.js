import React from "react";
import { Container, H1} from "./styles";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../theme/Global";
import { lightTheme, darkTheme } from "../theme/theme";
import ThemeToggler from "../theme";
import useDarkTheme from "../theme/useDarkTheme";


export default function Header(props) {
    const [theme, themeToggler] = 
    useDarkTheme();
    const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

    return(
        <>
        <Container>
                <div>
                    <H1>{props.name}</H1>
                </div>
                <div>
                <ThemeProvider theme={selectedTheme}>
                     <>
                        <GlobalStyles />
                        <ThemeToggler themeToggler={themeToggler} />
                    </>
                </ThemeProvider>
                </div>
        </Container>
        </>
    )
}