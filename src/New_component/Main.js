import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import i1 from './1.svg';
import i2 from './2.svg';
import i3 from './3.svg';
import i4 from './4.svg';
import i5 from './5.svg';
import i6 from './6.svg';
import logo from './logo.png'
import left from './lefts.svg'
import right from './rights.svg'

export default class Main extends Component {
    render() {
        return (
            <>
            {/* <div></div> */}
            <div className="container">
                <div className="sub_container">
                <div className="nav_bar">
                    <img src={logo} alt="error" className="logoc" />
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/New">ABOUT US</Link></li>
                        <li><Link to="/New">SERVICES</Link></li>
                        <li><Link to="/New">FREELANCE</Link></li>
                        <li><Link to="/New">BLOG</Link></li>
                        <li><Link to="/New">TUTORIAL</Link></li>
                        <li><Link to="/New">CONTACT US</Link></li>
                    </ul>
                </div>
                <div className="main_part">
                    <div className="top_img">
                        <div>
                            <img src={i1} alt="error" />
                            <h2>Wedding Photography</h2>
                        </div>
                        <div>
                            <img src={i2} alt="error" />
                            <h2>Beach Photography</h2>

                        </div>
                        <div>
                            <img src={i3} alt="error" />
                            <h2>Pre Wedding Photography</h2>

                        </div>
                        <div>
                            <img src={i4} alt="error" />
                            <h2>Portfolio Shoot</h2>

                        </div>
                        <div>
                            <img src={i5} alt="error" />
                            <h2>Drone Services</h2>

                        </div>
                        <div>
                            <img src={i6} alt="error" />
                            <h2>Graphic Design</h2>

                        </div>
                    </div>
                    <div className="main_content">
                        <h1>About Us</h1>
                        <p><a href="https://fliqaindia.com/">Fliqaindia</a> for everyone</p>
                        <h2>With this belief, we at <a href="https://fliqaindia.com/">Fliqaindia for everyone</a> started our journey 5 years ago with the belief
                            that everyone has the right to quality photography to help them better capture
                            and conserve their special moments.
                            We have been appreciated and recommended by Start Up India, StartUp Bengal, Imagesbazaar
                            and Digital India for our novel initiative. We have partnered with Canvera to give
                            you the best service possible. We are also trusted by Justdial, WedMEGood, Shaadisaga, weddingwire and so many well known event organisers.
                            
                            </h2>
                            </div>
                        </div>
                    </div>
                    <div className="arrows">
                        <img src={left} error="error" />
                        <img src={right} error="error" />
                    </div>
            </div>
    

    </>
    )
        
    }
}
