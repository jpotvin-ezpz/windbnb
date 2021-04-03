import React from 'react';
import ReactDOM from 'react-dom'
import Card from './components/Card';
import FilterDrawer from './components/FilterDrawer';
import Showcase from './components/Showcase';

class Index extends React.Component {
  render () {
    return (
      <div>
        <Card />
        <FilterDrawer />
        <Showcase />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root'),
)