import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

function MainLayout(props) {
    return (
        <div className='bg-white'>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default MainLayout