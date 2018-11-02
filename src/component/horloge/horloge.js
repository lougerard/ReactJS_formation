import React, { Component } from 'react';

class Horloge extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
  		date : new Date(),
  	};
  }

  	sOrNot(num){
        return num<2 ?'':'s';
    }
    getH(){
    	return this.state.date.getHours();
    }
    getM(){
    	return this.state.date.getMinutes();
    }
    getS(){
    	return this.state.date.getSeconds();
    }
    componentDidMount() {
       this.set = setInterval(() => this.tick(), 100);
    }
    componentWillUnmount() {
        clearInterval(this.set);
    }

    render(){
        return(
            <div>
                <p>Il est {this.getH()} heure{this.sOrNot(this.getH())} { this.getM()} minute{this.sOrNot( this.getM())} et {this.getS()} seconde{this.sOrNot(this.getS())}</p>
            </div>
        );
    }

  tick() {
    this.setState({date: new Date()});
  }

}


export default Horloge