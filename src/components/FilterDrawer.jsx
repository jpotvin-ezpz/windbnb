import React, {useState} from 'react';

function ListShowing({
  listShown, childCount, adultCount, incChildCount, handleLocationChoice,
  decChildCount, incAdultCount, decAdultCount,
}) { 
   if (listShown === 'locations') {
    return (
    <ul className='location-list'>
      <li className='location' id='Helsinki' onClick={(e) => handleLocationChoice(e)}>
        <span className='material-icons'>
          room
        </span>
        Helsinki, Finland
      </li>
      <li className='location' id='Turku' onClick={(e) => handleLocationChoice(e)}>
        <span className='material-icons'>
          room
        </span>
        Turku, Finland
      </li>
      <li className='location' id='Oulu' onClick={(e) => handleLocationChoice(e)}>
        <span className='material-icons'>
          room
        </span>
        Oulu, Finland
      </li>
      <li className='location' id='Vaasa' onClick={(e) => handleLocationChoice(e)}>
        <span className='material-icons'>
          room
        </span>
        Vaasa, Finland
      </li>
    </ul>
    )
  } else {
    return (
      <div className='guest-list'>
        <div className='add-adults--wrapper'>
          <h2 className='guest-btn-header' id='adult-header'>Adults</h2>
          <h3 className='guest-btn-subheader'>Ages 13 or above</h3>
          <div className='inc-dec-btns'>
            <button className='sub-btn' onClick={() => decAdultCount()}>
              <span className='material-icons'>remove</span>
            </button>
            <div className='cur-count'>{adultCount}</div>
            <button className='add-btn' onClick={() => incAdultCount()}>
            <span className='material-icons'>add</span>
            </button>
          </div>
        </div>
        <div className='add-kids--wrapper'>
          <h2 className='guest-btn-header'>Children</h2>
          <h3 className='guest-btn-subheader'>Ages 2-12</h3>
          <div className='inc-dec-btns'>
            <button className='sub-btn' onClick={() => decChildCount()}>
              <span className='material-icons'>remove</span>
            </button>
            <div className='cur-count'>{childCount}</div>
            <button className='add-btn' onClick={() => incChildCount()}>
            <span className='material-icons'>add</span>
            </button>
          </div>
        </div>
      </div>    )
  }
}


function Location({location, prelimLocation}) {
  if (prelimLocation) {
    return  <div className='locations active'>{prelimLocation}, Finland</div>
  } else if (location) {
    return <div className='locations active'>{location}, Finland</div>
  } else {
  return <div className='locations'>Add location</div>
  }
}

function Guests({guests}) {
  if (guests) {
    if (guests === 1) {
      return <div className='guests active'>{guests} guest</div>
    }
    return <div className='guests active'>{guests} guests</div>
  } else {
    return <div className='guests'>Add guests</div>
  } 
} 

const FilterDrawer = ({
  drawerOpen, location, guests, childCount, adultCount, handleLocationChoice,
  incChildCount, decChildCount, incAdultCount, decAdultCount, prelimLocation
}) => {
    const [listShown, setListShown] = useState('locations');
    
    if (drawerOpen) { 
   return ( <div className='outerModal'> {/* clicking outerModal closes drawer */}
      <div className='innerModal'>
        <div className='close-menu' > {/* onClick drawerClose */}
          <div className='bar1'></div>
          <div className='bar2'></div>
        </div>
        <p className='edit-search-text'>Edit your search</p>
        <div className='main-and-list--wrapper'>
          <div className='filter-drawer open' >
            <div className='location--wrapper' onClick={() => setListShown('locations')}>
            <h2 className='location-header'>Location</h2>
            <Location location={location} prelimLocation={prelimLocation}/>
            </div>
            <div className='guests--wrapper' onClick={() => setListShown('guests')}>
            <h2 className='guest-header'>Guests</h2>
            <Guests guests={guests} />
            </div>
            <div className='search-btn--wrapper'>
              <button type='button' className='search-btn' disabled>
                <span className='material-icons'>
                search
                </span>
                Search
              </button>
            </div>
          </div>
          <ListShowing 
            listShown={listShown} 
            childCount={childCount} 
            adultCount={adultCount}
            handleLocationChoice={handleLocationChoice}
            incChildCount={incChildCount}
            decChildCount={decChildCount}
            incAdultCount={incAdultCount}
            decAdultCount={decAdultCount}
          />
        </div>
      </div>
    </div>
    )} else {
      return ( 
        <div className='filter-drawer' >{/* onClick drawerOpen */}
          <Location location={location}/>
          <Guests guests={guests} />
          <div className='search-btn--wrapper'>
            <button type='button' className='search-btn' disabled>
              <span className='material-icons'>
              search
              </span>
            </button>
          </div>
        </div>
      )}
}
 
export default FilterDrawer;