import React from "react";
import { Outlet } from 'react-router-dom';
import Menu from "../componentsSystem/Menu";
import HeaderSystem from "../componentsSystem/HeaderSystem";
import Footer from "../components/Footer";

function SystemLayout(props) {
    return (
        <div className="bg-gradient-to-br from-[#A62190] via-[#48B0D9] to-[#6583BF]">
            <HeaderSystem/>
                <div className="flex flex-row h-screen p-5 m-5 gap-5">
                    <div className="bg-gray-900 h-full">
                        <Menu/>
                    </div>
                    <div className="bg-gray-900 w-screen">
                        <Outlet />
                    </div>
                </div>
        </div>
    )
}

export default SystemLayout