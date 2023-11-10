import React from "react";
import { BoxES, BoxInput, Button, Checkbox, Input, Main } from "./styles";
import { useState } from "react";


export default function BoxForm({ handleAdd, transactionsList, setTransactionsList }) {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);
  
    const generateID = () => Math.round(Math.random() * 1000);
  
    const handleSave = () => {
      if (!desc || !amount) {
        alert("Informe a descrição e o valor!");
        return;
      } else if (amount < 1) {
        alert("O valor tem que ser positivo!");
        return;
      }
  
      const transaction = {
        id: generateID(),
        desc: desc,
        amount: amount,
        expense: isExpense,
      };
  
      handleAdd(transaction);
  
      setDesc("");
      setAmount("");
    };

    return (
        <>
        <Main>
            <BoxInput>
                <div>
                    <h3>Descrição</h3>
                    <Input 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                    />
                </div>
                <div>
                    <h3>Valor</h3>
                    <Input 
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)} 
                    />
                </div>
                <BoxES>
                    <span>Entrada</span>
                    <Checkbox 
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                    />
                    <span>Saída</span>
                    <Checkbox 
                    type="radio"
                    id="rExpenses"
                    name="group1"
                    onChange={() => setExpense(!isExpense)} 
                    />
                </BoxES>
                <Button onClick={handleSave}>adicionar</Button>
            </BoxInput>
        </Main>
        </>
    )
}