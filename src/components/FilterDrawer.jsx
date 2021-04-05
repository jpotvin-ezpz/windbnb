const FilterDrawer = ({drawerOpen, location, guests}) => {
  
    if (drawerOpen) {
      return <div>yo</div>
    } else {
    return (  
    <div className='filter-drawer' >{/* onClick drawerOpens */}
      <div className='locations'>Add location</div> 
      <div className='guests'>Add guests</div> 
      <button type='button' className='search-btn'><span className='material-icons' disabled>search</span></button>
    </div>
    )}
}
 
export default FilterDrawer;