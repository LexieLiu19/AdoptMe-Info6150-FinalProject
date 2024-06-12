const EventCard = ({ event }) => {
  return (
    <div className="eventCard">
      <img className="eventCard__image" src={event.image} alt={event.eventName} />

      <div className="eventCard_content">
        <h5 className="eventCard__title">{event.eventName}</h5>
        <span className="eventCard__date">{event.eventDate}</span>
        <span className="eventCard__location">{event.location}</span>
        <p className="eventCard__details">{event.eventDetails}</p>
      </div>
    </div>
  );
};
export default EventCard;
