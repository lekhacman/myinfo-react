import React from 'react';
import { connect } from 'react-redux';
import { identity } from 'ramda';
import PropTypes from 'prop-types';
import Home from '../component/Home';
import { goToSingPass } from '../redux/modules/home';

export function App(props) {
  return <Home goToSingPass={props.goToSingPass} />;
}

App.propTypes = {
  goToSingPass: PropTypes.func,
};

const mapDispatchToProps = {
  goToSingPass,
};

export default connect(identity, mapDispatchToProps)(App);
