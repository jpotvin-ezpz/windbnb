import React from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      drawerOpen: false,
      totalGuests: 0,
      childCount:0,
      adultCount:0,
      location: '',
      prelimLocation: '',
    }
    this.decAdultCount = this.decAdultCount.bind(this);
    this.incAdultCount = this.incAdultCount.bind(this);
    this.decChildCount = this.decChildCount.bind(this);
    this.incChildCount = this.incChildCount.bind(this);
    this.handleLocationChoice = this.handleLocationChoice.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleFilterConfirm = this.handleFilterConfirm.bind(this);
  }

  handleFilterConfirm() {
    this.setState((prevState) =>{
      return {
        drawerOpen: false,
        totalGuests: prevState.childCount + prevState.adultCount,
        location: prevState.prelimLocation,
        prelimLocation: '',
        childCount: 0,
        adultCount: 0,
      }})
  }

  handleDrawerClose(e) {
    if (e.target.className === 'outerModal' ||
        e.target.className==='close-menu') {
    this.setState({
      drawerOpen: false,
    })}
    return;
  }

  handleDrawerOpen() {
    this.setState({
      drawerOpen: true,
    })
  }

  handleLocationChoice(e) {
    this.setState({
      prelimLocation: e.target.id,
    })
  }

  decAdultCount() {
    this.setState({
      adultCount: this.state.adultCount - 1,
    })
  }

  incAdultCount() {
    this.setState({
      adultCount: this.state.adultCount + 1,
    })
  }

  decChildCount() {
    this.setState({
      childCount: this.state.childCount - 1,
    })
  }

  incChildCount() {
    this.setState({
      childCount: this.state.childCount + 1,
    })
  }

  render() {
    let {drawerOpen, totalGuests, childCount, adultCount, prelimLocation, location  } = this.state
  return (
    <div className='app'>
      <Header
       drawerOpen={drawerOpen}
       guests={totalGuests}
       location={location}
       adultCount={adultCount}
       childCount={childCount}
       prelimLocation={prelimLocation}
       handleLocationChoice={this.handleLocationChoice}
       incChildCount={this.incChildCount}
       decChildCount={this.decChildCount}
       incAdultCount={this.incAdultCount}
       decAdultCount={this.decAdultCount}
       handleDrawerOpen={this.handleDrawerOpen}
       handleDrawerClose={this.handleDrawerClose}
       handleFilterConfirm={this.handleFilterConfirm}
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