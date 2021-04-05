import React from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      drawerOpen: false,
      guests: 0,
      location: '',
    }
  }
  render() {
    let {drawerOpen, guests, location } = this.state
  return (
    <div className='app'>
      <Header
       drawerOpen={drawerOpen}
       guests={guests}
       location={location}
       />
      <Showcase
       guests={guests}
       location={location}
       />
    </div>
  )
  }
}

export default App;