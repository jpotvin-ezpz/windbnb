import FilterDrawer from "./FilterDrawer";
import logo from '../logos/logo.svg'

const Header = ({
  drawerOpen, guests, childCount, adultCount, prelimLocation, handleLocationChoice, handleFilterConfirm,
  location, incChildCount, decChildCount, incAdultCount, decAdultCount, handleDrawerOpen, handleDrawerClose
}) => {
  return ( <div className='header'>
    <img className='windbnb-logo' src={logo} alt='windbnb logo' />
    <FilterDrawer 
       drawerOpen={drawerOpen}
       guests={guests}
       location={location}
       adultCount={adultCount}
       childCount={childCount}
       prelimLocation={prelimLocation}
       handleLocationChoice={handleLocationChoice}
       incChildCount={incChildCount}
       decChildCount={decChildCount}
       incAdultCount={incAdultCount}
       decAdultCount={decAdultCount}
       handleDrawerOpen={handleDrawerOpen}
       handleDrawerClose={handleDrawerClose}
       handleFilterConfirm={handleFilterConfirm}
       />
  </div> );
}
 
export default Header;