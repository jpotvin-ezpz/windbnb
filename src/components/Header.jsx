import FilterDrawer from "./FilterDrawer";
import logo from '../logos/logo.svg'

const Header = ({drawerOpen, guests, location}) => {
  return ( <div className='header'>
    <img className='windbnb-logo' src={logo} alt='windbnb logo' />
    <FilterDrawer 
       drawerOpen={drawerOpen}
       guests={guests}
       location={location}
       />
  </div> );
}
 
export default Header;