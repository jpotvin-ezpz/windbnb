import Card from './Card'
import stays from '../resources/stays.json';

let stayCards = stays.map((stay) => {
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

const Showcase = () => {
 return (<div className='showcase'>
    <div className='showcase-info'>
      <h1 className='showcase-title'>Stays in Finland</h1>
      <p className='stays-quantity'>12+ stays</p> {/* Make Dynamic */}
    </div>
    <div className='stays-gallery'>{stayCards}</div>
  </div>)};
 
export default Showcase;