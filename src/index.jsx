import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import './styles/index.css';

class Index extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Showcase />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render (
  <Index />,
  document.getElementById("root")
)