import style from "./index.module.css"
import logo from "./../../../assert/logo.svg"
import {Link} from "react-router-dom";
import { useState} from "react";
import {CSSProperties} from "react";


export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center",
        position: "absolute",
        top: "100%",
       fontSize:"30px",
       outline:"none",
        // width:"700%",
        // marginRight:"70%",
        transform: "translate(-50%, 0)",
        backgroundColor: "black",
       textDecorationColor:"#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "opacity 0.3s ease-in-out",
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
    };

    return (
        <nav style={{ position: "relative" }}>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <img src={logo} alt="logo" style={{ width: "109px", height: "32px" }} />
                <div style={{ position: "relative" }}>
                    <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
                        <div style={{ width: "24px", height: "2px", backgroundColor: "#000", marginBottom: "6px", transition: "transform 0.3s", transform: isOpen ? "rotate(-45deg) translate(-4px, 6px)" : "none" }}></div>
                        <div style={{ width: "24px", height: "2px", backgroundColor: "#000", marginBottom: "6px", opacity: isOpen ? 0 : 1, transition: "opacity 0.3s" }}></div>
                        <div style={{ width: "24px", height: "2px", backgroundColor: "#000", transition: "transform 0.3s", transform: isOpen ? "rotate(45deg) translate(-4px, -6px)" : "none" }}></div>
                    </div>
                    <div style={menuStyle}>
                        <Link to={"/home"} style={{ color: "blue", marginBottom: "0.5rem" }}>
                            Home
                        </Link>
                        <Link to={"/services"} style={{ marginBottom: "0.5rem" }}>
                            Services
                        </Link>
                        <Link to={"/products"} style={{ marginBottom: "0.5rem" }}>
                            Products
                        </Link>
                        <Link to={"/case-studies"} style={{ marginBottom: "0.5rem" }}>
                            Case Studies
                        </Link>
                        <Link to={"/about-us"} style={{ marginBottom: "0.5rem" }}>
                            About Us
                        </Link>
                        <Link to={"/careers"} style={{ marginBottom: "0.5rem" }}>
                            Careers
                        </Link>
                        <Link to={"/blog"} style={{ marginBottom: "0.5rem" }}>
                            Blog
                        </Link>
                        <Link to={"/contact-us"} style={{ marginBottom: "0.5rem" }}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

//          <nav className={style.mainCont}>
//
//
//             <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
//                 <img src={logo} alt={"logo"} className={style.logoCont}/>
//
//
//                     <div className={style.navBarCont}>
//                         <Link to={"/home"} style={{color: "blue"}}>Home</Link>
//
//                         <Link to={"/services"}>Services</Link>
//
//                         <Link to={"/products"}>Products</Link>
//
//                         <Link to={"/case studies"}>Case studies</Link>
//
//                         <Link to={"/about Us"}>About Us</Link>
//
//                         <Link to={"/careers"}>Careers</Link>
//
//                         <Link to={"/blog"}>Blog</Link>
//
//                         <Link to={"/contact Us"}>Contact Us</Link>
//
//                     </div>
//
//             </div>
//
//
//         </nav>
// )
// }
    export default NavBar;