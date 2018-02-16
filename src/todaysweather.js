import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Shelter from './shelter.js';

export default class TodaysWeather extends Component{
    constructor(){
        super();
        this.state={
            data:{
                main:{
                    temp: "loading..."
                    }
                }
            }
    }
    componentDidMount(){
        axios.get("http://api.openweathermap.org/data/2.5/weather?lat=39&lon=76&APPID=deb29dfd065c544e4164e76b251706d3").then((response)=>{
            //convert response.data.main.temp
            response.data.main.temp = Math.floor(response.data.main.temp * (9/5) - 459.67)
            this.setState({
                data:response.data,
            })
        })
    }
    
    render(){
        if (typeof this.state.data.main.temp === 'string') {
            var shelter = 'loading...'
         } else if (this.state.data.main.temp <= 45){
            var shelter = <Shelter/>
        } else {
            var shelter = "  ...   Find a nice park bench and enjoy the crack!"
        
        }
    
        return(
            <div>
                Yo, crackhead, the temperature today is {this.state.data.main.temp} F!
                {shelter}
            </div>
        )
    }
}

