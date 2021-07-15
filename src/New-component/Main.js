import React, { Component } from 'react'
import './Main.css'
import img3 from './Images/I6.png'
import { AnimatePresence, motion } from 'framer-motion'


const pageTransition = {
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: "-100%"
    }
}
class NewApp extends Component {
    constructor(props) {
        super(props)
        this.state = {

            number: '',
            final: ''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    handleSubmit(event) {
        event.preventDefault()
        if (!this.state.number == '' && this.state.number.length < 5) {
            this.setState({
                final: this.state.number

            })
            this.props.history.push({
                pathname: '/API/' + this.state.number

            })
        }
        else {
            return (
                alert("Please Enter Legit Ticker Symbols")
            )
        }

    }


    handleChange(event) {
        event.preventDefault()
        this.setState({
            number: event.target.value
        })
    }
    render() {

        return (
            <>
                <div className="Container_Main">
                    <motion.div
                        initial={{ opacity: 0 }, { y: "-100%" }}
                        animate={{ opacity: 1 }, { y: "0%" }}
                        exit={{ opacity: 0 }, { y: 0 }}
                        variants={pageTransition}
                        className="Image_cont">
                        <div className="Sub_Container_m">
                            <div className="All_text">
                                <div className="Text">
                                    <h1 className="Page_text">
                                        This is a free<br></br>
                                        Stock Searching Project<br></br>
                                        <br></br>
                                        It was made with multiple free
                                        API keys.<br />
                                        <span>(Ps Ticker Symbol only please)</span>
                                    </h1>
                                </div>
                                <form className="Search_Bar" onSubmit={this.handleSubmit}>
                                    <input placeholder="Search" type="text" value={this.state.number} name="number" onChange={this.handleChange} />

                                    <button className="Search_sub">Submit</button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }, { x: "100%" }}
                        animate={{ opacity: 1 }, { x: "0%" }}
                        exit={{ opacity: 0 }, { x: 0 }}
                        className="All_images">
                        <img src={img3} className="Iphone" />
                    </motion.div>
                </div>
            </>
        );


    }


}
export default NewApp

