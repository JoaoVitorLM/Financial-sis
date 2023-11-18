import React from "react";
import { Route, Routes } from "react-router-dom";
import Dash from "../pages/home";
import Transaction from "../pages/transactions";
import CalendarPage from "../pages/calendarPage";
import Home from "../pages/home"
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import useAuth from "../hooks/useAuth";


const Private = ({ Item }) => {
    const {signed} = useAuth;
  
    return signed > 0 ? <Item /> : <Signin />;
  };
  

export default function Rotas() {
    return(
        <>
            <Routes>
                <Route element={<Dash/>} path="/"/>
                <Route element={<Transaction/>} path="transações"/>
                <Route element={<CalendarPage/>} path="calendário"/>
                <Route exact path="/home" element={<Private Item={Home}/>} />
                <Route path="/signin" element={<Signin />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </>
    )
}