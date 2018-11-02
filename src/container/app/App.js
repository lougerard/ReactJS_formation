import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from '../../component/welcome/welcome'
import Afficheur from '../../component/afficheur/afficheur'
import Recherche from '../../component/recherche/recherche'
import Meteo from '../../component/meteo/meteo'
import ElementList from '../../component/elementList/elementList'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : []
    }
    this.onQueryResult = this.onQueryResult.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  onQueryResult(data) {
    this.setState((oldState) => ({list : [data, ... oldState.list]}));
  } 
  clearList() {
    this.setState({
      list : []
    });
    console.clear();
  }

  render() {
    return (
      <div className="App">
          <Welcome name="fifi" age={22} /> 
          <Afficheur />
          <Recherche onReponse = {this.onQueryResult} clear={this.clearList} />
          <br />
          <ElementList list={this.state.list}/>
      </div>
    );
  }




}


export default App

//<Meteo city={this.state.city}/>

// npm start dans le dossier ou se trouve package.json
//<img src={logo} className="App-logo" alt="logo" />