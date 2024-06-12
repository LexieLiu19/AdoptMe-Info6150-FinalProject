import Carousel from '../components/events/Carousel';
import EventsCards from '../components/events/EventsCards';

import './EventsPage.css';

const EventsPage = () => {
  return (
    <div className="eventsPage">
      <Carousel />
      <EventsCards />
    </div>
  );
};
export default EventsPage;
