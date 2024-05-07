import style from "./index.module.css"
import fintech from "../../../assert/Fintech_2_ix6wma.png"
import assert from "../../../assert/Payment_processors_1_hlltyn.png"
import bank from "../../../assert/Banks_gnu0dq.png"
import investment from "../../../assert/Investment_firms_4_se4mjj.png"
import insurer from "../../../assert/Insurers_1_brca2m.png"
import payProcessor from "../../../assert/Payment_processors_1_hlltyn.png"
import arrow from "../../../assert/send.svg"
import access from "../../../assert/access-bank.svg"
import dots from "../../../assert/dotbank.svg"
import enterprises from "../../../assert/enterpriselife.svg"
import ibtc from "../../../assert/ibtc.svg"
import standbicibtc from "../../../assert/stanbicibtc.svg"
import providus from "../../../assert/providus.svg"
import fidelity from "../../../assert/fidelity-bank.svg"
import zenith from "../../../assert/zenith.svg"
import wema from "../../../assert/wema.svg"
import unity from "../../../assert/unity.svg"
import uba from "../../../assert/uba.svg"
import fbg from "../../../assert/fbg.svg"
import Lucid from "../../../assert/lucid.svg"
import Omni from "../../../assert/omni.svg"
import Oneview from "../../../assert/one-view.svg"
import ceo from "../../../assert/Funmilayo_Omo_tlhons.jpg"
import leftQuote from "../../../assert/icons8-quote-left-50.png"
import frame from "../../../assert/frame.png"
import box1 from "../../../assert/1_7Tu-hbua8pAAhCjdpkpRGA.png"
import box2 from "../../../assert/1_H-ND1Pp0XtGQ6ZBPIN4JIQ.png"
import box3 from "../../../assert/1_NCstpTnj_8wB17mQJUCuYw.png"
// import tah from "../../../assert/taj.svg"


import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from "react-router-dom";
// import {ImageScroller} from "./Home"

//
// const clientLogos =
//     [access, dots, enterprises,
//         fbg, ibtc, standbicibtc,
//         providus, fidelity, zenith,
//         wema, unity, uba];


const images = [

    [fintech, assert],
    [bank, investment],
    [insurer, payProcessor]


];
const Home = () => {


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    // const ImageScroller = () => {
    //     const [images, setImages] = useState(clientLogos);
    //     const [isScrolling, setIsScrolling] = useState(false);
    //
    //     useEffect(() => {
    //         const scrollImages = async () => {
    //             setIsScrolling(true);
    //             await new Promise((resolve) => setTimeout(resolve, 3000));
    //             setImages([...images, ...images]);
    //             setIsScrolling(false);
    //         };
    //
    //         const intervalId = setInterval(scrollImages, 5000);
    //
    //         return () => clearInterval(intervalId);
    //     }, []);

    return (
        <div>
            <div className={style.mainCont}>

                <div style={{padding: "30px 19px"}}>
                    <h1 style={{color: "#181a1b"}}>Bring Your <br/> Products Ideas To <br/>
                        <span style={{color: "blue"}}>Life</span></h1>

                    <div>
                        <button className={style.exCont}>Explore Product</button>
                        <button className={style.contBtn}>Contact Sale</button>
                    </div>
                    {/*<FilledButton color={"#2E3192"} text={"Explore Products"} textColor={"#fff"}></FilledButton>*/}
                </div>

                <div className={style.sliderCont}>
                    <Swiper direction="horizontal">
                        {images.map((imagePair, index) => (
                            <SwiperSlide key={index}>
                                {index === currentImageIndex && (
                                    <div className={style.imagePair}>
                                        <div className={style.imageFlexContainer}>
                                            <img src={imagePair[0]} alt="" className={style.slideImage}/>
                                        </div>
                                        <div className={style.imageFlexContainer}>
                                            <img src={imagePair[1]} alt="" className={style.slideImage}/>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


            </div>
            <div className={style.archive}>

                <div style={{display: "flex", alignContent: "center"}}>
                    <span style={{borderLeft: "solid gray  1px", height: "80%"}}></span>
                    <p style={{color: "#10152E", width: "300px", marginLeft: "10px"}}> Digicore provides digital
                        technology solutions to financial
                        service
                        providers across Africa.</p>
                </div>


                <div className={style.deployed} style={{marginLeft: '212px '}}>
                    <h1>20+</h1>
                    <p>Products deployed</p>
                </div>
                <div className={style.emptydiv}></div>


                <div className={style.client}>
                    <h1>18+</h1>
                    <p>Clients serviced</p>
                </div>
                <div className={style.emptydiv}></div>

                <div className={style.effect}>
                    <div className={style.emptydiv}></div>

                    <h1>3x</h1>
                    <p>More Effective</p>
                </div>
            </div>


            <div className={style.itemsDiv} style={{background: "black",padding:"29px 22px"}}>
                <p style={{color: "white"}}>Our Services</p>

                <section style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <h3 style={{color: "white",opacity:0.8}}>Financial Services essentials</h3>
                    <p style={{color: "white",opacity:0.8}}>The tech that keeps financial service running</p>
                </section>

                <section>
                    <div className={style.sectionDiv}>


                        <div className={style.bluePairOne} style={{display: "flex", flexDirection: "row", gap: "35px"}}>

                            <div className={style.blueBackground}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "10px",
                                    marginLeft: "40%"
                                }}>
                                    <h6
                                        style={{
                                            color: "white",
                                            fontSize: "20px",
                                            maxWidth: "180px"
                                        }}>Custom Software Development</h6>
                                    <img src={arrow} alt={""}/>
                                    <a href={"/services$Custom service Development"}
                                       style={{rotate: "none", translate: "none", scale: "none"}}></a>

                                </div>
                                <div>
                                    <h1 style={{color: "white"}}>01</h1>

                                </div>

                            </div>
                            <div className={style.blueBackground}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "10px",
                                    marginLeft: "40%"
                                }}>
                                    <h6
                                        style={{
                                            color: "white",
                                            fontSize: "20px",
                                            maxWidth: "180px"
                                        }}>Digital Transformation</h6>
                                    <img src={arrow} alt={""}/>
                                    <a href={"/services$Custom service Development"}
                                       style={{rotate: "none", translate: "none", scale: "none"}}></a>

                                </div>
                                <div>
                                    <h1 style={{color: "white"}}>02</h1>

                                </div>

                            </div>

                        </div>
                        <div className={style.bluePairTwo} style={{display: "flex", flexDirection: "row", gap: "35px",marginTop:"23px"}}>

                            <div className={style.blueBackground}>
                                <div>
                                    <h1 style={{color: "white"}}>03</h1>

                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "10px",
                                    marginLeft: "40%"
                                }}>
                                    <h6
                                        style={{
                                            color: "white",
                                            fontSize: "20px",
                                            maxWidth: "180px"
                                        }}>Digital Banking Application</h6>
                                    <img src={arrow} alt={""}/>
                                    <a href={"/services$Custom service Development"}
                                       style={{rotate: "none", translate: "none", scale: "none"}}></a>

                                </div>


                            </div>
                            <div className={style.blueBackground}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "10px",
                                    marginLeft: "40%"
                                }}>
                                    <h6
                                        style={{
                                            color: "white",
                                            fontSize: "20px",
                                            maxWidth: "180px"
                                        }}>Digital Transformation</h6>
                                    <img src={arrow} alt={""}/>
                                    <Link to={"/services$Custom service Development"}
                                       style={{rotate: "none", translate: "none", scale: "none"}}></Link>

                                </div>

                                <div>
                                    <h1 style={{color: "white"}}>04</h1>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <hr/>
                <h4 style={{color: "white", textAlign: "center"}}>Trusted By:</h4>
                <div className={style.clients}>

                    <img src={access} alt={""}/>
                    <img src={uba} alt={""}/>
                    <img src={unity} alt={""}/>
                    <img src={wema} alt={""}/>
                    <img src={ibtc} alt={""}/>
                    <img src={standbicibtc} alt={""}/>
                    <img src={providus} alt={""}/>
                    <img src={dots} alt={""}/>
                    <img src={enterprises} alt={""}/>
                    <img src={zenith} alt={""}/>
                    <img src={fidelity} alt={""}/>
                    <img src={fbg} alt={""}/>

                </div>
            </div>
            <div style={{padding: "15px 18px"}}>
                <h4>Our Products</h4>
                <h2>Customizable fintech solutions</h2>
            </div>
            <div className={style.sectionThree}>

                <div style={{display: "flex", flexDirection: "row", gap: "14px"}}>
                    <div className={style.lucid}>
                        <img src={Lucid} alt={""} style={{width: "70px", padding: "25px"}}/>
                        <h4 style={{color: "white"}}>Lucid</h4>
                        <p style={{color: "white"}}>Digital banking platform</p>
                        <p style={{color: "white"}}>offer your customers frictionless transaction, <span>smart saving solutions,and full autonomy.</span>
                        </p>
                        <button className={style.btn}>Learn more</button>
                    </div>
                    <div className={style.lucid}>
                        <img src={Oneview} alt={""} style={{width: "70px", padding: "25px"}}/>
                        <h4 style={{color: "white"}}>OneView</h4>
                        <p style={{color: "white"}}>Merchant onboarding platform</p>
                        <p style={{color: "white"}}>Empower businesses to join your payment <span>network,monitor their performance,and manage their growth.</span>
                        </p>
                        <button className={style.btn}>Learn more</button>

                    </div>
                    <div className={style.lucid}>
                        <img src={Omni} alt={""} style={{width: "70px", padding: "25px"}}/>
                        <h4 style={{color: "white"}}>Omni</h4>
                        <p style={{color: "white"}}>Payment collections platform</p>
                        <p style={{color: "white"}}>Swift,secure and effortless payment collections, <span>with real time visibility into your collections data.</span>
                        </p>
                        <button className={style.btn}>Learn more</button>
                    </div>
                </div>
            </div>
            <div style={{background: "#5866de", padding: "20px 15px"}}>
                <div>
                    <img src={ceo} alt={""}
                         style={{width: "10%", borderRadius: "55%", marginLeft: "83%", marginTop: "10%"}}/>
                </div>

                <span style={{color: "white"}}>What are client say</span>
                <h3 style={{color: "white"}}>Don't just take our word for it </h3>
                <img src={leftQuote} alt={""}/>
                <p style={{color: "white", fontSize: "40px", maxWidth: "800px"}}>
                    What drew us to Digicore is their simplicity, responsiveness, capacity,
                    and desire to impact, especially in the area of financial inclusion.
                    So, Digicore is a partner that we are very comfortable with.
                </p>

                <h2 style={{color: "white"}}>Funmilayo Omo</h2>
                <p style={{color: "white"}}> MD/CEO, Enterprise Life Nigeria</p>

            </div>
            <div>

                <div className={style.comment} style={{display:"flex",flexDirection:"row" ,gap:"50px",padding:"27px 22px"}}>
                <img src={frame} alt={""} style={{width:"35%"}}/>
                    <div style={{marginTop: "60px"}}>
                        <p style={{fontWeight: "bold", fontSize: "20px", opacity: 0.8}}>Your partners in growth</p>
                        <h3 style={{fontWeight: "bold", fontSize: "32px", marginTop: "1rem", opacity: 0.8}}>We are here
                            for you, every step of the way</h3>
                        <p style={{maxWidth: "400px", opacity: 0.8}}>From ideation to deployment and beyond, our team of
                            experienced professionals will be there to guide you
                            and help you overcome any challenges you face.</p>
                        <button className={style.commentBtn}>Contact Sales</button>
                    </div>

             </div>

            </div>
            <div style={{background: "black",padding:"19px 16px"}}>

                <h4 style={{color: "white"}}>Recent blog posts</h4>

                <div style={{display: "flex",justifyContent:"space-between",padding:"19px"}}>
                    <h3 style={{color: "white"}}>Fintech insights to stay ahead of the curve</h3>

                        <Link to={"/blog"}>view more</Link>
                </div>

                <div style={{display: "flex", flexDirection: "row", width: "100%"}}>


                    <div>
                        <img src={box3} alt={""} style={{width: "90%"}}/>
                        <h6 style={{color: "white", opacity: 0.7, fontSize: "12px"}}>core-banking-solutions.Apr
                            17,2024</h6>
                        <h3 style={{color: "white", opacity: 0.7, maxWidth: "300px"}}>Can Your Core Banking System Take
                            a Million Punches?</h3>
                    </div>
                    <div>
                        <img src={box2} alt={""} style={{width: "90%",borderRadius:"10px"}}/>
                        <h6 style={{color: "white", opacity: 0.7, fontSize: "12px"}}>Payments.Apr 3,2024</h6>
                        <h3 style={{color: "white", maxWidth: "300px", opacity: 0.7}}>It’s Time to Curb This Menace
                            Called Chargeback Fraud</h3>
                    </div>
                    <div>
                        <img src={box1} alt={""} style={{width: "90%"}}/>
                        <h6 style={{color: "white", opacity: 0.7, fontSize: "12px"}}>banking.Mar 27,2024</h6>
                        <h3 style={{color: "white", maxWidth: "300px", opacity: 0.7}}>UAT: Making Sure Your New Core
                            Banking System Doesn’t Bounce</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;