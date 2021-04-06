import React from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      drawerOpen: false,
      totalGuests: 0,
      location: '',
    }
  }
  render() {
    let {drawerOpen, totalGuests, location } = this.state
  return (
    <div className='app'>
      <Header
       drawerOpen={drawerOpen}
       guests={totalGuests}
       location={location}
       />
      <Showcase
       guests={totalGuests}
       location={location}
       />
    </div>
  )
  }
}

export default App;