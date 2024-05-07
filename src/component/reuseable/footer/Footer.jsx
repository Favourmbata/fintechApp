import style from "./index.module.css"
import logo from "../../../assert/whiteLogo.svg"
import ft  from "../../../assert/ft-ISO.webp"
import fti from "../../../assert/ft-pci.svg"
import linkedIn from "../../../assert/LinkedIn_svg_1_io7zpx.png"
import x from "../../../assert/pajamas_x_wtfdur.png"
import instagram from "../../../assert/Instagram_svg_1_uczaf2.webp"
import youtube from "../../../assert/YouTube_svg_1_do8wpz.png"


const Footer = ()=>{
    const date = new Date().getFullYear()
    return(
        <div className={style.mainCont}>
            <div style={{padding: "50px"}}>
                <div className={style.secondCont}>
                    <div className={style.linkCont}>
                        <img src={logo} alt={"logo"}/>
                        <p>Linceses:</p>
                        <img src={ft} alt={""}/>
                        <img src={fti} alt={""}/>
                    </div>

                    <div className={style.thirdCont}>
                        <div className={style.company}>
                            <ul>
                                <h4>Company</h4>
                                <li>About</li>
                                <li>Contact Us</li>
                            </ul>

                        </div>

                        <div className={style.product}>
                            <ul>
                                <h4>Product</h4>
                                <li>Lucid</li>
                                <li>Oneview</li>
                                <li>Iris</li>
                                <li>Automata</li>
                                <li>Omni</li>

                            </ul>

                        </div>

                        <div className={style.resource}>
                            <ul>
                                <h4>Resources</h4>
                                <li>Blog</li>
                                <li>FAQS</li>
                            </ul>

                        </div>

                    </div>


                </div>

                <div className={style.social}>
                    <img src={linkedIn} alt={""}/>
                    <img src={x} alt={""}/>
                    <img src={instagram} alt={""}/>
                    <img src={youtube} alt={""}/>
                </div>
            </div>

            <hr/>

            <div className={style.policy}>
                <p style={{color: "white"}}> &copy;{date}Digicore Limited.All rights reserved.</p>
                <div className={style.policy_href}>
                    <a href={style.privacy} style={{color:"white"}}>privacy policy</a>
                    <a href={style.privacy} style={{color:"white"}}>ISMS policy</a>
                    <a href={style.privacy}style={{color:"white"}}>ISP policy</a>
                </div>

            </div>


        </div>
    )
}
export default Footer;