import NavBar from "../reuseable/navBar/NavBar";
import Footer from "./../reuseable/footer/Footer";
import {Outlet} from "react-router-dom"
import React from "react";
const Layout = ()=>{
    return(
        <>

            <NavBar/>
            <Outlet/>
            <Footer/>
            </>
    )
}
export default Layout;