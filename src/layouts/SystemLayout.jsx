import React from "react";
import { Outlet } from 'react-router-dom';
import Menu from "../componentsSystem/Menu";
import HeaderSystem from "../componentsSystem/HeaderSystem";
import Footer from "../components/Footer";

function SystemLayout(props) {
    return (
        <div className="h-full bg-gray-900">
            <HeaderSystem/>
            <div className="flex flex-row h-full p-5 m-5 gap-5">
                <div className="bg-gradient-to-br from-[#A62190] via-[#48B0D9] to-[#6583BF] h-full">
                    <Menu/>
                </div>
                <div className="bg-gradient-to-br from-[#A62190] via-[#48B0D9] to-[#6583BF] w-screen min-h-screen">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default SystemLayout