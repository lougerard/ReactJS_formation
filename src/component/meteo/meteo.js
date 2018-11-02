import React, { Component } from 'react';
import axios from 'axios';
import './meteo.css'
const URL_BASE = 'http://api.openweathermap.org/data/2.5/weather?q=';
const URL_KEY ='&appid=4bb41c3ec84725302ee0d2b40c8038c9';
const URL_METRIC = '&units=metric&lang=fr';
const URL_IMG = `http://openweathermap.org/img/w/10d.png`;


class Meteo extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
        meteo : null
  	};
  }
  recup(recherche) {
    this.setState({meteo:recherche} );
  } 
  componentDidMount() {
    console.log("enter fucnct")
    const city = this.props.city;
    const url = `${URL_BASE}${city}${URL_KEY}${URL_METRIC}`;
    axios.get(url)
      .then(
          (response) => this.setState({meteo : response.data})
      )
      .catch(
        (e) => console.log("erreur catch")
      )
  }

    render(){
      const url_icon = this.state.meteo 
      ? `http://openweathermap.org/img/w/${this.state.meteo.weather[0].icon}.png`
      : 'noIcon';
      // console.log(this.state.meteo);
      const view = this.state.meteo && <div > 
       <span className='meteo'>{this.state.meteo.name}</span>
        <span> {this.state.meteo.main.temp} °C <br />
         {this.state.meteo.weather[0].description} </span>
      </div>

        return(
            <div className="blocM"> 
              {this.state.meteo ? view : <h3>no data </h3>}
              <img src = {url_icon} />
            </div>
        );
    }

}

Meteo.defaultProps = {

}

export default Meteo