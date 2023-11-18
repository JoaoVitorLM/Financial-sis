import React from "react";
import SideBar from "../../components/Sidebar";
import Header from "../../components/Header";

import CalendatDate from "../../components/Calendar";
import { Main } from "../home/styles";
import { Body } from "./styles";
import SidebarMobal from "../../components/MobalSidebar";
import HeaderMobal from "../../components/MobalHeader";

export default function CalendarPage() {
    return (
        <>
            <Main>
                <SideBar />
                <HeaderMobal/>
                <SidebarMobal/>
                <Body>
                    <Header name='Calendário' />
                    <CalendatDate />
                </Body>
            </Main>
        </>
    )
}