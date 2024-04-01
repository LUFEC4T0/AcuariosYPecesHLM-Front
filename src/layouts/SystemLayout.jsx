import React from "react";
import { Outlet } from 'react-router-dom';
import Menu from "../componentsSystem/Menu";
import HeaderSystem from "../componentsSystem/HeaderSystem";
import Footer from "../components/Footer";

function SystemLayout(props) {
    return (
        <div className="">
            <HeaderSystem/>
                <div className="flex flex-row h-screen p-5 m-5 gap-5">
                    <div className="bg-gray-500 h-full">
                        <Menu/>
                    </div>
                    <div className="bg-gray-500 w-screen">
                        <Outlet />
                    </div>
                </div>
        </div>
    )
}

export default SystemLayout