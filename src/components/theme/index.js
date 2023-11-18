import React from "react";
import Button from "./button";

const ThemeToggler = (props) => {
    const { themeToggler } = props;
    return (
       <Button onClick={themeToggler}>☀️ 🌙</Button>
    );
 };
 
 export default ThemeToggler;