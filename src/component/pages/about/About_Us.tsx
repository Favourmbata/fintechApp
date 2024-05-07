import style from "./index.module.css"
import image from "../../../assert/f4xkvhuzobfmxmlpbbdj.png"
import assert from "../../../assert/icons8-verify-40.png"
import stalkholders from "../../../assert/f1o9h5oe6nzhhxifilt2.png"
const About_Us = ()=>{
    return(
        <div>

            <div className={style.about}>
                <h1>Digicore:</h1>
                <h2>Forging technology for Finance</h2>
                <p style={{textAlign: "center", fontWeight: "12px", color: " #333", marginTop: "10px"}}>Digicore is a
                    financial technology company that empowers financial institutions to <br/>
                    drive growth, profitability, and efficiency with cutting-edge technology solutions.</p>
            </div>

            <div style={{marginLeft: "10%", marginTop: "20px"}}>
                <p style={{fontSize: "25px"}}>Who we are</p>
                <h3 style={{fontWeight: "bolder", fontSize: "30px"}}>Africa's foremost financial technology vendor</h3>
            </div>

            <div className={style.secondCont}>
                <div>
                    <img src={image} alt={""} className={style.imageCont}/>
                </div>

                <div >
                    <p style={{maxWidth: "800px", fontSize: "26px", opacity: 0.8}}>We
                        specialize in developing custom software solutions like digital banking
                        applications, payment systems, insurance applications, and investment applications.
                        We also help fintech companies integrate their systems with third-party APIs. <br/>

                        Our process is designed to be collaborative and transparent, and we work
                        closely with our clients throughout the entire service delivery process, from
                        ideation to deployment and beyond.</p>
                </div>
            </div>

            <div style={{marginLeft:"90px"}}>
            <p style={{opacity:0.8,fontSize:"19px",padding:"20px",marginLeft:"11px"}}>Our Story</p>
            <p style={{fontSize:"40px",fontWeight:"medium",padding:"20px"}}>Founded in 2020, Digicore has quickly become one of Africa's
                leading fintech vendors, serving over 20 of the fastest-growing and
                most innovative financial service providers in Sub-Saharan Africa.</p>
            <p style={{opacity:0.6,fontSize:"28px",padding:"22px"}}>We are constantly reinventing ourselves, staying ahead of the curve to provide our clients with the most advanced and effective
                solutions. Our goal is to lead Africa into the future of financial technology.</p>
        </div>

            <div style={{background: "#d8d6d2", padding: "12px 12px"}}>
                <p style={{fontSize: "27px", opacity: 0.8}}>Core values</p>
                <p style={{fontWeight: "bold", fontSize: "25px"}}>Values are our bedrock</p>

                <div style={{display: "flex", flexDirection: "row", gap: "28px", padding: "15px 70px"}}>
                    <div className={style.linkCont}
                         style={{background: "rgb(68,81,188)", width: "49%", height: "250px", borderRadius: "5px"}}>

                        <div>
                            <p style={{fontSize: "120px", fontWeight: "bolder"}}>A</p>
                        </div>

                        <div>
                            <div style={{display: "flex", flexDirection: "row", gap: "12px", marginTop: "33px"}}>
                                <img src={assert} alt={""} style={{height: "35px", marginTop: "23px"}}/>
                                <p style={{fontSize: "20px"}}>Accountability</p>
                            </div>
                            <p style={{fontSize: "20px", maxWidth: "300px", opacity: 0.8}}>We take ownership of our
                                actions
                                and decisions, and we are accountable for the outcomes.</p>
                        </div>
                    </div>

                    <div className={style.linkCont}
                         style={{background: "rgb(68,81,188)", width: "49%", height: "250px", borderRadius: "5px"}}>
                        <div>
                            <p style={{fontSize: "120px", fontWeight: "bolder"}}>R</p>
                        </div>
                        <div>
                            <div style={{display: "flex", flexDirection: "row", gap: "12px", marginTop: "33px"}}>
                                <img src={assert} alt={""} style={{height: "35px", marginTop: "23px"}}/>
                                <p style={{fontSize: "20px"}}>Results</p>
                            </div>
                            <p style={{fontSize: "20px", maxWidth: "300px", opacity: 0.8}}>We are focused on producing
                                tangible,
                                measurable outcomes and achieving our goals.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", gap: "28px", padding: "15px 70px"}}>
                    <div className={style.linkCont} style={{background: "rgb(68,81,188)", width: "49%", height: "250px", borderRadius: "5px"}}>
                        <div>
                            <div style={{display: "flex", flexDirection: "row", gap: "12px", marginTop: "33px"}}>
                                <img src={assert} alt={""} style={{height: "35px", marginTop: "23px"}}/>
                                <p style={{fontSize: "20px"}}>Integrity</p>
                            </div>

                            <p style={{fontSize: "20px", maxWidth: "300px", opacity: 0.8}}>We ensure that we do the
                                right
                                thing,
                                even when no one is watching.

                            </p>
                        </div>
                        <div>
                            <p style={{fontSize: "120px", fontWeight: "bolder"}}>I</p>
                        </div>
                    </div>

                    <div className={style.linkCont}
                         style={{background: "rgb(68,81,188)", width: "49%", height: "250px", borderRadius: "5px"}}>
                        <div>
                            <div style={{display: "flex", flexDirection: "row", gap: "12px", marginTop: "33px"}}>
                                <img src={assert} alt={""} style={{height: "35px", marginTop: "23px"}}/>
                                <p style={{fontSize: "20px"}}>Speed</p>
                            </div>
                            <p style={{fontSize: "20px", maxWidth: "300px", opacity: 0.8}}>We are quick and agile in
                                our decision-making and execution.
                            </p>
                        </div>
                        <div>
                            <p style={{fontSize: "120px", fontWeight: "bolder"}}>S</p>
                        </div>

                    </div>
                </div>

                <div style={{display: "flex", flexDirection: "row", gap: "28px", padding: "15px 70px"}}>
                    <div className={style.linkCont} style={{background: "rgb(68,81,188)", width: "49%", height: "250px", borderRadius: "5px"}}>
                        <div>
                            <p style={{fontSize: "120px", fontWeight: "bolder"}}>E</p>
                        </div>
                        <div>
                            <div style={{display: "flex", flexDirection: "row", gap: "12px", marginTop: "33px"}}>
                                <img src={assert} alt={""} style={{height: "35px", marginTop: "23px"}}/>
                                <p style={{fontSize: "20px"}}>Excellence</p>
                            </div>
                            <p style={{fontSize: "20px", maxWidth: "300px", opacity: 0.8}}>We strive for the highest level of quality
                                and continuously seek to improve.

                            </p>
                        </div>
                    </div>

                    <div className={style.linkContTwo} style={{border:"solid #82a4e2", width: "49%", height: "250px", borderRadius: "5px"}}>

                        <div>
                            <h4 style={{fontSize: "30px", maxWidth: "280px"}}>Think you're a great fit?</h4>
                        </div>

                        <div>
                            <button className={style.roundedBtn}>Join Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background:"#dcdad7",padding:"70px 55px"}}>
             <p style={{fontSize:"30px",fontWeight:30}}>Come join us</p>
                <h2 style={{maxWidth:"600px",fontSize:"30px"}}>Build a career that suits your lifestyle,
                    in a company where your voice matters.</h2>
                <div>
                    <button className={style.rolesBtn}>See All Open Roles</button>
                </div>
                <div>
                    <img src={stalkholders} alt={""} style={{marginTop:"46px",width:"100%"}}/>
                </div>
            </div>
        </div>
    )
}
export default About_Us;