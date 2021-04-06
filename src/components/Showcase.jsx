import Card from './Card'
import stays from '../resources/stays.json';

const Showcase = ({location, guests}) => {
  let maxShowableCards = [];
  let filteredStays = [];
  
  let filteredGuests = stays.filter(stay => stay.maxGuests >= guests)
  
  if (!!location) {
    filteredStays = filteredGuests.filter(stay => stay.city === location)
  } else {
    filteredStays = filteredGuests;
  }
  
  let finalStays = filteredStays.map((stay) => {
    return <Card 
        photo={stay.photo}
        superHost={stay.superHost}
        type={stay.type}
        beds={stay.beds}
        rating={stay.rating}
        title={stay.title}
        key={stay.photo}
      />
});

  for (let i = 0; i < 6 && i < finalStays.length; i += 1) {
    maxShowableCards.push(finalStays[i])
  }
  
  let stayQuantity;
  if (finalStays.length > 12) {
    stayQuantity = '12+ stays';
  } else if (finalStays.length === 1) {
    stayQuantity = `${finalStays.length} stay`;
  } else {
    stayQuantity = `${finalStays.length} stays`;
  }

  return (<div className='showcase'>
    <div className='showcase-info'>
      <h1 className='showcase-title'>Stays in Finland</h1>
      <p className='stays-quantity'>{stayQuantity}</p> {/* Make Dynamic */}
    </div>
    <div className='stays-gallery'>{maxShowableCards}</div>
  </div>)};
 
export default Showcase;