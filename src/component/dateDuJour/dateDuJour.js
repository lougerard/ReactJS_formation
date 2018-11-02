import React, { Component } from 'react';

class DateDuJour extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
  		date : new Date(),
  	};
  }
    render(){
        return(
            <div>
                <p>Nous sommes le {this.state.date.getDate()} du {this.state.date.getUTCMonth()+1}.</p>
            </div>
        );
    }

}


export default DateDuJour