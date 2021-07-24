import React, { Component } from 'react'

export default class Test extends Component {
    constructor(){
        super()
        this.state={
            data:''
        }
    }
    async componentDidMount(e){
        try
        { 
            const url ="http://localhost:27017/HelloWorld.me"
            const res= await fetch(url)
            const data = await res.json()
            const item= data
            console.log(data)
            this.setState({
                data:item
            })
        }
        catch (e){
            console.log("NO DATA WAS THERE PROBABLY WRONG SERVER ADDRESS")
        }
    }
    render() {
        return (
            <div>
                <h1>hi</h1>
            </div>
        )
    }
}
