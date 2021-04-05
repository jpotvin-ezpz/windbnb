const Card = ({photo, superHost, type, rating, title, beds}) => {
  return (
  <div className='stayCard'>

    <img className='card-photo' src={photo} alt='apartment preview' />
   
    <div className='details--wrapper'>
      <div className='host-and-type'>
        {superHost && (<div className='host-status'>SUPER HOST</div>)}
        <div className='apt-type'>{type}{beds && (
                <span>
                &nbsp;.&nbsp;
                  {beds} beds
                </span>)}</div>
      </div>
      <div className='apt-rating'><span className='material-icons'>star</span>{rating.toPrecision(3)}</div>
    </div>
    <div className='apt-title'>
      {title}
    </div> 
  </div>);
}
 
export default Card;