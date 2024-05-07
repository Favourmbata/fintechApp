import style from "./index.module.css"
import dashboard from "../../../assert/Dashboard_w1ibj8.png"
import dashboard2 from "../../../assert/Dashboard_2_kxcdcw.png"
import frame from "../../../assert/frame.png"

import {Link} from "react-router-dom";

const CaseStudy = ()=>{
    return(
        <div className={style.mainDiv} style={{padding: "10px 10px"}}>
            <div>
                <h3 style={{fontSize: "70px", color: "#10152E", opacity: 0.8}}>Case Studies</h3>
                <p style={{fontSize: "26px", opacity: 0.8}}>
                    Our success stories are proof of our innovation, precision, and focus on client satisfaction
                </p>
            </div>
            <div className={style.titles}>
                <button className={style.projects}>All projects</button>
                <button className={style.fintech}>Fintech</button>
                <button className={style.fintech}>Banking</button>
                <button className={style.fintech}>Investment</button>
                <button className={style.fintech}>Pay processor</button>
                <button className={style.fintech}>Insurance</button>
                <button className={style.fintech}>Asset management</button>
            </div>

           <div>
            <div className={style.linkDiv}>
                <div className={style.sectionDiv}>
                    <div style={{padding: "20px 19px", marginTop: "20px", marginLeft: "30px"}}>
                        <Link to={"/case studies/knoxx-case-study"}>
                            <h5 style={{fontSize: "25px", marginLeft: "35px", color: "white"}}>Knoxx</h5>
                        </Link>
                        <p style={{fontSize: "20px", marginLeft: "35px"}}>Redefining insurance with a human touch</p>
                        <div className={style.btnStyle}>
                            <button className={style.btnText}>Insurance</button>
                            <button className={style.btnText}>Web app</button>
                            <button className={style.btnText}>Mobile app</button>
                        </div>
                    </div>
                </div>
                <div className={style.sectionTwo}>
                    <img src={dashboard} alt={""} style={{width: "70%", alignContent: "center"}}/>
                </div>


            </div>
            <div className={style.linkDivTwo}>
            <div className={style.subDiv}>
                <div style={{padding: "20px 19px", marginTop: "20px", marginLeft: "30px"}}>
                    <Link to={"/case studies/bankiri-case-study"}>
                        <h5 style={{fontSize: "25px", marginLeft: "35px", color: "white"}}>Bankiri</h5>
                    </Link>
                    <p style={{fontSize: "20px", marginLeft: "35px"}}>Scaling Bankari: From Branches to Beyond</p>
                    <div className={style.btnStyleTwo}>
                        <button className={style.btnText}>Banking</button>
                        <button className={style.btnText}>Web app</button>
                        <button className={style.btnText}>Mobile app</button>
                    </div>
                </div>
            </div>
            <div className={style.sectionTwoLink}>
                <img src={dashboard2} alt={""} style={{width: "70%", alignContent: "center"}}/>
            </div>
            </div>
            </div>
            <div style={{background:"black"}}>

                <div className={style.digiProject}>
                <img src={frame} alt={""} style={{width:"34%",padding:"38px 90px"}}/>
                    <div style={{marginTop:"176px",marginLeft:"80px",opacity:0.7}}>
                    <h3 style={{color:"white"}}>Ready to start your Fintech project?</h3>
                    <p style={{color:"white",maxWidth:"590px",fontSize:"17px"}}>We will work with you every step of the way to ensure that your project is
                        a success. Contact us today to get started on your fintech project.</p>
                      <button className={style.contactBtn}>Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CaseStudy;