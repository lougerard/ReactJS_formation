import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props) {
  return(
      <div>
        <h1> Bienvenu {props.name} sur l'application React ! </h1>
        <p> Vous avez {props.age} ans </p>
        <br></br>
      </div>
    );
}

Welcome.defaultProps = {
  name : 'Riri',
  age : 18
};
Welcome.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number
};

export default Welcome;
