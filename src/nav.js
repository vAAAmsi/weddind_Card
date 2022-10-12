import React from "react";
import './nav.css'
import Logo from './assets/Logo.png'
import Background from "./assets/Background.jpg"
import Button from '@mui/material/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img1 from './assets/Page1.jpg'
import Img2 from './assets/Page2.jpg'
import Img3 from './assets/Page3.jpg'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
function Nav(){
    return(
        <div>
            <div className="mainC">
            <div className="mainC1">
                <div className="mobile-menu" >
                    <MenuOutlinedIcon/>
                </div>
            <div className="logo" >
                <img className="img" src={Logo}></img>
            </div>
            
            <div className="middle" >
                <div className="middle-ele" >wedding cards</div>
                <div className="middle-ele" >Birthday cards</div>
                <div className="middle-ele">Feeling cards</div>
                <div className="middle-ele">Anniversity cards</div>
            </div>
            <div className="signin" >Login/signup</div>
            <div className="mobile-menu" ></div>
            </div>
            </div>
            <div className="b1">
                <div className="Back" >
                    <h1 className="b2">
                       Digital Card Details
                       <div className="op">
                        <div className="op1">
                            <div className="op2">
                            <div className="c-container" >
                            <Carousel
                            centerMode={true}
                            showThumbs={false}
                            >
                                <div>
                                    <img src={Img1} className="c-img" />
                                </div>
                                <div>
                                    <img src={Img2} className="c-img" />
                                </div>
                                <div>
                                    <img src={Img3} className="c-img" />
                                </div>
                            </Carousel>
                            </div>
                            </div>
                            <div className="op3">
                                <div>
                                <div className="text1">Card Title</div>
                                <div className="radi">
                                    <div className="re1">
                                    <div className="rate">$499</div>
                                    <div className="re">$2000</div>
                                    </div>
                                    <div className="disco">75%Off</div>
                                </div>
                                <div className="textbox">
                                Donec eu ornare mi. Sed finibus
                                condimentum mauris, ut dictum eros
                                maximus vitae. Nullam
                                condimentum tortor ac elit feugiat
                                iaculis. Aenean mauris nisl, blandit
                                </div>
                                </div>
                                <div>
                                <Button style={{backgroundColor:'black',height:60,width:190,borderRadius:20}} variant="contained">Try this card</Button>
                                </div>
                            </div>
                        </div>

            </div> 
                    </h1>
                </div>
                {/* <img src={BackgrclassName="c-img" ound} className="Back"></img> */}
             </div>
             <div className="text">
                Features
             </div>
             <div className="bottom">
                <div className="bott">
                    <div className="rect">
                <div className="cir"></div>
                <div className="te">Create your card in just 5 mins</div>

                </div>
                <div className="rect">
                <div className="cir"></div>
                <div className="te">Customize the Text with "Edit this Page" Option</div>

                </div>
                <div className="rect">
                <div className="cir"></div>
                <div className="te">Editing is available after purchase also</div>

                </div>
                </div>
             </div>
            

            
        </div>
    )
}
export default Nav;