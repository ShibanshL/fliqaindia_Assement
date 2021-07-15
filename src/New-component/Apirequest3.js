import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import API4 from './API4';
import img1 from './Images/Github_1.png'
import img2 from './Images/Portfolio.png'
import Plot from "react-plotly.js"
import './Api.css'
import { AnimatePresence, motion } from 'framer-motion'
import No_news from './No_news';


export default function Apirequest3(props) {
    let { final } = useParams()
    const [loading, setLoading] = useState(false)
    const [loading1, setLoading1] = useState(false)
    var D = "Daily"
    var Y = "Yearly"
    const [apidata, setAPIdata] = useState('')
    const [apidata1, setAPIdata1] = useState('')
    const [apidata2, setAPIdata2] = useState('')
    const [apidata3, setAPIdata3] = useState('')
    const [apidata4, setAPIdata4] = useState('')
    const [apidata5, setAPIdata5] = useState('')
    const [napidata, setnAPIdata] = useState('')
    const [napidata1, setnAPIdata1] = useState('')
    const [napidata2, setnAPIdata2] = useState('')
    const [napidata3, setnAPIdata3] = useState('')
    const [napidata4, setnAPIdata4] = useState('')
    const [napidatao, setnAPIdatao] = useState('')
    const [test, setTest] = useState('')


    useEffect(async () => {
        try {
            const url = "https://api.polygon.io/v2/reference/news?limit=10&order=descending&sort=published_utc&ticker=" + final + "&published_utc.gte=2021-04-26&apiKey=O6ZsUfA79Hc84eDrD3lkMLaPbtZDCbVX"
            const response = await fetch(url)
            const data = await response.json()
            const item = data.results
            if(item.length==0){
                setAPIdata5(<h1>No data here</h1>)
            }
            else{ 
            
            setAPIdata5(item)
            setLoading1(true)}
            }
        
        catch (e) {
            console.log(e.error)
        }

    }, [final])

    useEffect(async () => {

        let apidataX = []
        let apidataY = []
        let apiclose = []
        let apihigh = []
        let apilow = []


        const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + final + "&interval=5min&apikey=39U5VQSINVHVLGFH"
        const response = await fetch(url)
        const data = await response.json()
        const item = data
        setTest(data)
        for (var key in data['Time Series (5min)']) {
            apidataX.push(key)
            apidataY.push(data['Time Series (5min)'][key]['1. open'])
            apiclose.push(data['Time Series (5min)'][key]['4. close'])
            apihigh.push(data['Time Series (5min)'][key]['2. high'])
            apilow.push(data['Time Series (5min)'][key]['3. low'])


        }

        setnAPIdata(apidataX)
        setnAPIdata1(apidataY)
        setnAPIdata2(apiclose)
        setnAPIdata3(apihigh)
        setnAPIdata4(apilow)

        setLoading(true)

    }, [final])
    useEffect(async () => {

        let apidataX = []
        let apidataY = []
        let apiclose = []
        let apihigh = []
        let apilow = []


        const url = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=" + final + "&apikey=39U5VQSINVHVLGFH"
        const response = await fetch(url)
        const data = await response.json()
        const item = data
        setTest(data)
        for (var key in data['Weekly Time Series']) {
            apidataX.push(key)
            apidataY.push(data['Weekly Time Series'][key]['1. open'])
            apiclose.push(data['Weekly Time Series'][key]['4. close'])
            apihigh.push(data['Weekly Time Series'][key]['2. high'])
            apilow.push(data['Weekly Time Series'][key]['3. low'])


        }

        setAPIdata(apidataX)
        setAPIdata1(apidataY)
        setAPIdata2(apiclose)
        setAPIdata3(apihigh)
        setAPIdata4(apilow)

        setLoading(true)

    }, [final])
    useEffect(async () => {
        let apidataX = []
        const url = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + final + "&apikey=39U5VQSINVHVLGFH"
        const response = await fetch(url)
        const data = await response.json()
        const item = data
        setnAPIdatao(item)
    }, [final])
    return (
        <>
            <div className="Main_Container">
                <div className="Page_1">
                    <div className="Sub_Container">
                        <motion.div
                            initial={{ opacity: 0 }, { y: "-100%" }}
                            animate={{ opacity: 1 }, { y: "0%" }}
                            exit={{ opacity: 0 }, { y: 0 }} className="All_info">
                            <div className="Heading_Symbol">
                                <h1>{final}</h1>
                                <h2>Price: {apidata1[1]}</h2>
                            </div>
                            <div className="Sub_info">
                                <h2>Sector : {napidatao.Sector}</h2>
                                <h2>Country : {napidatao.Country}</h2>
                                <h2>Currency : {napidatao.Currency}</h2>
                                <h2>SMA 50 : {napidatao['50DayMovingAverage']}</h2>
                                <h2>SMA 200 : {napidatao['200DayMovingAverage']}</h2>
                                <h2>Market Cap : {napidatao.MarketCapitalization}$</h2>
                                <h2>Shares Float : {napidatao.SharesFloat}</h2>
                                <h2>Shares Outstand : {napidatao.ShortPercentOutstanding}</h2>


                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }, { x: "100%" }}
                            animate={{ opacity: 1 }, { x: "0%" }}
                            exit={{ opacity: 0 }, { x: 0 }}
                            className="All_Charts">
                            <div className="First_Plot">
                                {loading ? <Plot
                                    data={
                                        [
                                            {
                                                x: apidata,
                                                close: apidata2,
                                                high: apidata3,
                                                low: apidata4,
                                                open: apidata1,
                                                fillcolor: 'lightblue',

                                                increasing: { line: { color: 'green' } },
                                                decreasing: { line: { color: 'red' } },

                                                type: 'candlestick',
                                                xaxis: 'x',
                                                yaxis: 'y'
                                            }
                                        ]
                                    }
                                    layout={{ width: 700, height: 350, title: Y, background: "pink" }}
                                /> : <><API4 /></>}
                            </div>

                            <div className="Second_Plot">
                                {loading ?
                                    <Plot
                                        data={
                                            [
                                                {
                                                    x: napidata,
                                                    close: napidata2,
                                                    high: napidata3,
                                                    low: napidata4,
                                                    open: napidata1,

                                                    increasing: { line: { color: 'green' } },
                                                    decreasing: { line: { color: 'red' } },

                                                    type: 'candlestick',
                                                    xaxis: 'x',
                                                    yaxis: 'y'
                                                }
                                            ]
                                        }
                                        layout={{ width: 700, height: 350, title: D }}
                                    /> : <><API4 /></>
                                }
                            </div>
                            <div className="First_Plot_Tab">
                                {loading ? <Plot
                                    data={
                                        [
                                            {
                                                x: apidata,
                                                close: apidata2,
                                                high: apidata3,
                                                low: apidata4,
                                                open: apidata1,
                                                fillcolor: 'lightblue',

                                                increasing: { line: { color: 'green' } },
                                                decreasing: { line: { color: 'red' } },

                                                type: 'candlestick',
                                                xaxis: 'x',
                                                yaxis: 'y'
                                            }
                                        ]
                                    }
                                    layout={{ width: 800, height: 400, title: Y }}
                                /> : <><API4 /></>}
                            </div>

                            <div className="Second_Plot_Tab">
                                {loading ?
                                    <Plot
                                        data={
                                            [
                                                {
                                                    x: napidata,
                                                    close: napidata2,
                                                    high: napidata3,
                                                    low: napidata4,
                                                    open: napidata1,

                                                    increasing: { line: { color: 'green' } },
                                                    decreasing: { line: { color: 'red' } },

                                                    type: 'candlestick',
                                                    xaxis: 'x',
                                                    yaxis: 'y'
                                                }
                                            ]
                                        }
                                        layout={{ width: 800, height: 400, title: D }}
                                    /> : <><API4 /></>
                                }
                            </div>
                            <div className="First_Plot_Phone">
                                {loading ? <Plot
                                    data={
                                        [
                                            {
                                                x: apidata,
                                                close: apidata2,
                                                high: apidata3,
                                                low: apidata4,
                                                open: apidata1,
                                                fillcolor: 'lightblue',

                                                increasing: { line: { color: 'green' } },
                                                decreasing: { line: { color: 'red' } },

                                                type: 'candlestick',
                                                xaxis: 'x',
                                                yaxis: 'y'
                                            }
                                        ]
                                    }
                                    layout={{ width: 380, height: 400, title: Y, background: "pink" }}
                                /> : <><API4 /></>}
                            </div>

                            <div className="Second_Plot_Phone">
                                {loading ?
                                    <Plot
                                        data={
                                            [
                                                {
                                                    x: napidata,
                                                    close: napidata2,
                                                    high: napidata3,
                                                    low: napidata4,
                                                    open: napidata1,

                                                    increasing: { line: { color: 'green' } },
                                                    decreasing: { line: { color: 'red' } },

                                                    type: 'candlestick',
                                                    xaxis: 'x',
                                                    yaxis: 'y'
                                                }
                                            ]
                                        }
                                        layout={{ width: 380, height: 400, title: D, autosize: true, }}
                                    /> : <><API4 /></>
                                }
                            </div>

                        </motion.div>
                    </div>
                </div>

                <div className="Page_2">
                    <motion.div
                        initial={{ opacity: 0 }, { x: "-200%" }}
                        animate={{ opacity: 1 }, { x: "0%" }}
                        exit={{ opacity: 0 }, { x: 0 }} className="Sub_news">

                        <h1>Some related news with Links if any</h1>
                        <div className="All_news">{loading1 ?
                            <h2>
                                {apidata5.map(m => {
                                    return (
                                        <div className="Source_news">
                                            <a href={m.article_url}><h2>{m.title}</h2></a>
                                        </div>
                                    )
                                })}
                            </h2> :
                            <><No_news />
                            </>}
                        </div>
                        <div className="All_Links">
                            <div className="Image_links">
                                <a href="https://github.com/ShibanshL">
                                    <h2 className="Hover_name">Github Profile</h2>
                                    <img className="Github" src={img1} />
                                </a>
                                <a href="https://shibanshl.github.io/Shibansh_Sahoo/">
                                    <h2 className="Hover_name1">Portfolio Site</h2>
                                    <img className="Portfolio" src={img2} />
                                </a>
                            </div>
                            <div className="Home_Custom">
                                <Link className="Home_back" to={"/"}>Home</Link>
                            </div>
                            <h2 className="Ending">Site design / logo © 2021 Shibansh Sahoo</h2>
                        </div>
                    </motion.div>
                </div>

            </div>



        </>
    )
}

// Alpha vintage api key="39U5VQSINVHVLGFH"
// Alpha vintage api New-key="39U5VQSINVHVLGFH"