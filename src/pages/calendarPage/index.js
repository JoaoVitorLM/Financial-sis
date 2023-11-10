import React from "react";
import SideBar from "../../components/Sidebar";
import Header from "../../components/Header";

import CalendatDate from "../../components/Calendar";

export default function CalendarPage() {
    return(
        <>
            <Header name='Calendário'/>
            <SideBar/>
            <CalendatDate />
        </>
    )
}