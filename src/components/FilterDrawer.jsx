const FilterDrawer = () => {
  return (
    <div className='filter-drawer'>
      <div className='locations'>Helsinki, Finland</div> {/* make dynamic */}
      <div className='guests'>Add guests</div> {/* make dynamic */}
      <button type='button' className='search-btn'><span className='material-icons'>search</span></button>
    </div>
  );
}
 
export default FilterDrawer;