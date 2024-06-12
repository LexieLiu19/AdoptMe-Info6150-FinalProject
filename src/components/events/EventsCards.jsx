import EventCard from './EventCard';

import eventsData from '../../data/eventsData.js';

const EventsCards = () => {
  return (
    <div>
      <h2 className="eventsPage__title">Enjoy Our Wonderful Events With Your Furry Friends!</h2>
      <div className="eventsCards">
        {eventsData.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })}
      </div>
    </div>
  );
};
export default EventsCards;
