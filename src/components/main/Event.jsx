const Event = ({ event }) => {
  return (
    <section className="event">
      <div className="event__image">
        <img src={event.image} alt={event.eventName} />
      </div>
      <div className="event__content">
        <h4 className="event__content-title">{event.eventName}</h4>
        <p className="event__content-date">{event.eventDate}</p>
        <p className="event__content_details">{event.eventDetails}</p>
      </div>
    </section>
  );
};
export default Event;
