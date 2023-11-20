import React from "react";
import { Body, BoxChart, Main} from "./styles";
import SideBar from "../../components/Sidebar";
import BoxValues from "../../components/BoxValue";
import { useEffect, useState } from "react";
import BoxForm from "../../components/Boxform";
import Header from "../../components/Header";
import ChartComponent  from "../../components/Charts/index";
import HeaderMobal from "../../components/MobalHeader/index"

export default function Home() {
    const data = localStorage.getItem("transactions");
    console.log(data)
    const [transactionsList, setTransactionsList] = useState(
      data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));
  
      const amountIncome = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));
  
      const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
      const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
  
      const total = Math.abs(income - expense).toFixed(2);
  
      setIncome(`R$ ${income}`);
      setExpense(`R$ ${expense}`);
      setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
    }, [transactionsList]);
  
    const handleAdd = (transaction) => {
      const newArrayTransactions = [...transactionsList, transaction];
  
      setTransactionsList(newArrayTransactions);
  
      localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
    };
    
    return (
        <>
            <Main>
                <SideBar/>
                <HeaderMobal />
                <Body>
                  <Header name={"Dashboard"}/>
                    <BoxValues income={income} expense={expense} total={total} />
                   <BoxForm 
                      handleAdd={handleAdd}
                      transactionsList={transactionsList}
                      setTransactionsList={setTransactionsList}
                    />
                    <BoxChart>
                        <ChartComponent/>
                    </BoxChart>
                </Body>
            </Main>
        </>
    )
};
