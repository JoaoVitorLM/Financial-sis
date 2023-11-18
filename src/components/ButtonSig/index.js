import React from "react";
import { ButtonSig } from "./styles";

export default function Button({ Text, onClick, Type = "button" }) {
    return(
        <>
          <ButtonSig type={Type} onClick={onClick}>
           {Text}
          </ButtonSig>
         
        </>
    )
}