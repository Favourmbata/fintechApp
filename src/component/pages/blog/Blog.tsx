import style from "./index.module.css"
import mv4 from "../../../assert/1_Mv4EyGS_2Qv9-Cl_Dd07vg.png"
import nc from "../../../assert/1_NCstpTnj_8wB17mQJUCuYw.png"
import nh from "../../../assert/1_H-ND1Pp0XtGQ6ZBPIN4JIQ.png"
import basket from "../../../assert/1_7Tu-hbua8pAAhCjdpkpRGA.png"
import handshake from "../../../assert/handshake.png"
import fintech from "../../../assert/1_bEvJSIn5IUgOBkuVZEWWNg.png"

// import pos from "../../../assert/pos.png"

const Blog = ()=>{
    return(
        <div className={style.mainCont}>

            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{padding: "40px 40px"}}>
                    <div>
                        <img src={mv4} alt={""} className={style.image1}/>
                    </div>
                    <div
                        style={{background: "black", color: "white", opacity: 0.7, width: "105%", borderRadius: "9px"}}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "15px",
                            fontSize: "22px",
                            padding: "25px 25px"
                        }}>
                            <small>core-banking-solution</small>
                            <small>Apr 17,2024</small>
                        </div>
                        <div>
                            <p style={{
                                fontSize: "30px",
                                fontWeight: "20px",
                                maxWidth: "480px",
                                padding: "30px 25px"
                            }}>Can Your Core Banking System Take a Million Punches?</p>
                        </div>
                    </div>
                </div>

                <div style={{padding: "40px 40px"}}>
                    <div>
                        <img src={nc} alt={""} className={style.image1}/>
                    </div>
                    <div
                        style={{background: "black", color: "white", opacity: 0.7, width: "105%", borderRadius: "9px"}}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "15px",
                            fontSize: "22px",
                            padding: "25px 25px"
                        }}>
                            <small>Payments</small>
                            <small>Apr 3,2024</small>
                        </div>
                        <div>
                            <p style={{
                                fontSize: "30px",
                                fontWeight: "20px",
                                maxWidth: "480px",
                                padding: "30px 25px"
                            }}>How to give your payment system a life of its own</p>
                        </div>
                    </div>
                </div>
                <div style={{padding: "40px 40px"}}>
                    <div>
                        <img src={nh} alt={""} className={style.image1}/>
                    </div>
                    <div
                        style={{background: "black", color: "white", opacity: 0.7, width: "105%", borderRadius: "9px"}}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "15px",
                            fontSize: "22px",
                            padding: "25px 25px"
                        }}>
                            <small>Payments</small>
                            <small>Apr 24,2024</small>
                        </div>
                        <div>
                            <p style={{
                                fontSize: "30px",
                                fontWeight: "20px",
                                maxWidth: "480px",
                                padding: "30px 25px"
                            }}>It’s Time to Curb This Menace Called Chargeback Fraud</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.secondSection}>
                <div style={{padding: "40px 40px"}}>
                    <div>
                        <img src={basket} alt={""} className={style.image1}/>
                    </div>
                    <div
                        style={{background: "black", color: "white", opacity: 0.7, width: "105%", borderRadius: "9px"}}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "15px",
                            fontSize: "22px",
                            padding: "25px 25px"
                        }}>
                            <small>banking</small>
                            <small>Mar 27,2024</small>
                        </div>
                        <div>
                            <p style={{
                                fontSize: "30px",
                                fontWeight: "20px",
                                maxWidth: "480px",
                                padding: "30px 25px"
                            }}>UAT: Making Sure Your New Core Banking System Doesn’t Bounce</p>
                        </div>
                    </div>
                </div>

                <div style={{padding: "40px 40px"}}>
                    <div>
                        <img src={handshake} alt={""} className={style.image1}/>
                    </div>
                    <div
                        style={{background: "black", color: "white", opacity: 0.7, width: "105%", borderRadius: "9px"}}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "15px",
                            fontSize: "22px",
                            padding: "43px 25px"
                        }}>
                            <small>banking</small>
                            <small>Mar 27,2024</small>
                        </div>
                        <div>
                            <p style={{
                                fontSize: "30px",
                                fontWeight: "20px",
                                maxWidth: "420px",
                                padding: "30px 25px"
                            }}>Merchant Dispute Resolution Done Right</p>
                        </div>
                    </div>
                </div>
                <div style={{padding: "40px 40px"}}>
                    <div>
                        <img src={fintech} alt={""} className={style.image1}/>
                    </div>
                    <div
                        style={{background: "black", color: "white", opacity: 0.7, width: "105%", borderRadius: "9px"}}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "15px",
                            fontSize: "22px",
                            padding: "25px 25px"
                        }}>
                            <small>Fintech</small>
                            <small>Apr 24,2024</small>
                        </div>
                        <div>
                            <p style={{
                                fontSize: "30px",
                                fontWeight: "20px",
                                maxWidth: "480px",
                                padding: "44px 25px"
                            }}>How Industry Leaders are Building Banks to Last</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;