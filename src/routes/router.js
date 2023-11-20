import React from "react";
import { Route, Routes } from "react-router-dom";
import Transaction from "../pages/transactions";
import CalendarPage from "../pages/calendarPage";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import useAuth from "../hooks/useAuth";
import Home from "../pages/home";


const Private = ({ Item }) => {
    const { signed } = useAuth();
  
    return signed > 0 ? <Item /> : <Signin />;
  };
  

export default function Rotas() {
    return(
        <>
            <Routes>
                <Route element={<Home/>} path="/home"/>
                <Route element={<Transaction/>} path="transações"/>
                <Route element={<CalendarPage/>} path="calendário"/>
                <Route exact path="/home" element={<Private Item={Home}/>} />
                <Route path="/" element={<Signin />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </>
    )
}