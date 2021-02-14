import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import IndecisionApp from './components/IndecisionApp';
import Footer from './components/Footer';
import './styles/index.scss';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <IndecisionApp />
    <Footer />
  </React.Fragment>,
  document.getElementById('app')
);
