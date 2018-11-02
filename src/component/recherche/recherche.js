import React, { Component } from 'react';


class Recherche extends Component{
  constructor(props) {
  	super(props);
    this.updateInput = this.updateInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  	this.state = {
        text :''
  	};
  }
  updateInput(e) {
    this.setState ({
        [e.target.name]:e.target.value
    });
  }
  submitForm(event) {
      event.preventDefault();
      //creation d'un event custom
      this.props.onReponse(this.state.text);

      this.setState({
        text :''
      });
  }

    render(){
        return(
            <form onSubmit={this.submitForm} className="rech">
              <input type="text" name="text" onChange={this.updateInput} value={this.state.text} placeholder={this.props.placeholder} required/> 
              <input type="submit" value="valider" /> 
              <input type="button" onClick={this.props.clear}  name="clear" value="clear"/>
            </form>
        );
    }

}

// defaut pour avoid les erreurs quand l'event n'set pas utiliser
Recherche.defaultProps = {
  placeholder : 'recherche',
  onReponse : () =>{},
  clear : () => {}
}

export default Recherche