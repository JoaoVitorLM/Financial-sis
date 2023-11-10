import React from "react";
import { Route, Routes } from "react-router-dom";
import Dash from "../pages/home";
import Transaction from "../pages/transactions";
import Report from "../pages/report";
import CalendarPage from "../pages/calendarPage";

export default function Rotas() {
    return(
        <>
            <Routes>
                <Route element={<Dash/>} path="/"/>
                <Route element={<Transaction/>} path="transações"/>
                <Route element={<Report/>} path="relatório"/>
                <Route element={<CalendarPage/>} path="calendário"/>
            </Routes>
        </>
    )
}