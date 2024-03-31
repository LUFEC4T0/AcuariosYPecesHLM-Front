import React from "react";
import { Outlet } from 'react-router-dom';
import Menu from "../componentsSystem/Menu";
import HeaderSystem from "../componentsSystem/HeaderSystem";
import Footer from "../components/Footer";

function SystemLayout(props) {
    return (
        <div className="">
            <HeaderSystem/>
                <div className="flex flex-row">
                    <div className="p-5 m-5 bg-gray-500 h-full">
                        <Menu/>
                    </div>
                    <div className="p-5 m-5 bg-gray-500 w-screen">
                        <Outlet />
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default SystemLayout