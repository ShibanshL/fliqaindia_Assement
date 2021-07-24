import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './style1.css'



export default class New extends Component {
    render() {
        return (
            <div className="container1">
                <div className="sub_container1">
                <div className="nav_bar1">
                    <img src={logo} alt="error" className="logoc1" />
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/">ABOUT US</Link></li>
                        <li><Link to="/">SERVICES</Link></li>
                        <li><Link to="/">FREELANCE</Link></li>
                        <li><Link to="/">BLOG</Link></li>
                        <li><Link to="/">TUTORIAL</Link></li>
                        <li><Link to="/">CONTACT US</Link></li>
                    </ul>
                    <div className="buttons">
                        <button>Login/Sign-Up</button>
                    </div>
                </div>
                <div className="main_part1">
                    <div className="main_content">
                        <h1>What is Logo Design?</h1>
                        <p>     Logo tells the story of your brand. It enhances your brand image and speaks to your audience.
                                Logo design makes the first impression for you in your working environment. Gives your
                                business and brand an identity and projects a professional image. It creates memorable visuals
                                to the outside world and build loyalty.
                                </p>
                                <div className="n_buttons">
                                    <button className="left">Start Designing</button>
                                    <button className="right">Get a Quote</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
