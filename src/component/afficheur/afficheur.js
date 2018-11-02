import React, { Component } from 'react';
import Horloge from '../horloge/horloge'
import DateDuJour from '../dateDuJour/dateDuJour'

class Afficheur extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
  		dateJ : new DateDuJour(),
      horlogeJ : new Horloge()
  	};
  }

    onAction(event) {
      event.preventDefault();
      this.setState((oldState) => ({
          active : !oldState.active
      }));
    }
    render(){
      let h;
      if (this.state.active) {
          h = <Horloge />;
      }
      else {
        h = <DateDuJour />;
      }
        return(
            <div onClick={(e) => this.onAction(e)}>
                 {h}
            </div>
        );
    }

}


export default Afficheur