import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TodaysWeather from './todaysweather.js';
import { Table } from 'reactstrap';
export default class Shelter extends Component{
    constructor(){
        super();
            this.state= {
                data:[]
            }
    }
    componentDidMount(){
        axios.get("https://data.baltimorecity.gov/resource/5k4p-pxa4.json?$$app_token=tbsvn3OEXxHteXM3A8VZmPk4m").then((place) => {
                this.setState({
                    data: place.data
                })
                })
            }
    render(){
        if (this.state.data.length) {
            
            var tbody = this.state.data.map(function(elem){
                return <tr>
                <td>{elem.name}</td>
                <td>{elem.location_1_address}</td>
              </tr>

            });
  
        } else {
            var tbody = "...Fetching Crack Data"
        }
        return (
            <div>
                crack is awesome :) !!!!! yeahhhhhhh!!!!
                
      <Table>
        <thead>
          <tr>
            <th>Shelter Name</th>
            <th>Address</th>
         </tr>
        </thead> 
        <tbody> 
            {tbody}
        </tbody>
      </Table>

            </div>
        )}
}
//tbsvn3OEXxHteXM3A8VZmPk4m
//https://data.baltimorecity.gov/resource/5k4p-pxa4.json