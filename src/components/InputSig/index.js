import React from "react";
import { InputSig } from "./styles";

export default function Input({ type, placeholder, value, onChange }) {
    return(
        <>
          <InputSig
           value={value}
           onChange={onChange}
           type={type}
           placeholder={placeholder}
          />  
        </>
    )
}