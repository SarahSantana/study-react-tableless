import React from 'react';
import PropTypes from 'prop-types';

export default class HelloWorld extends React.Component {
  render() {
    return <p>Olá {this.props.nome}!</p>
  }
}

// referencia: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
HelloWorld.propTypes = {
  nome: PropTypes.string.isRequired
}
