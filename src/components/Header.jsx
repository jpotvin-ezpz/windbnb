import FilterDrawer from "./FilterDrawer";
import logo from '../logos/logo.svg'

const Header = () => {
  return ( <div className='header'>
    <img className='windbnb-logo' src={logo} alt='windbnb logo' />
    <FilterDrawer />
  </div> );
}
 
export default Header;