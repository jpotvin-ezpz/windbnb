import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import Footer from './components/Footer';
import './styles/index.css';

function Index() {
    return (
      <div>
        <App />
        <Footer />
      </div>
    )
  }

ReactDOM.render (
  <Index />,
  document.getElementById("root")
)