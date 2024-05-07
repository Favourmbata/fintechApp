import Layout from "../component/layout/Layout";
import Home from "../component/pages/home/Home";
import Pages from "../component/pages/Body"
import About from "../component/pages/about/About_Us";
import CaseStudy from "../component/pages/caseStudy/CaseStudy";
import React from "react";
import Blog from "../component/pages/blog/Blog";
// import Digicore from "../component/pages/digicore/Digicore";

export  const Routes = [
    {
        path:"",
        element:<Layout/>,
        children:[

            {
                path: "",
                element: <Pages/>
            },


            {
                path: "/about Us",
                element: <About/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/case studies",
                element: <CaseStudy/>
            },
            {
                path: "/blog",
                element: <Blog/>
            }
        ]





    }



    ]