import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import eventsData from '../../data/eventsData';
import Event from './Event';
import './Events.css';

const eventsPreview = eventsData.slice(0, 3);

const Events = ({ setPage }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setPage('Events');
  };
  return (
    <div className="events">
      <a onClick={handleClick} href="/">
        <h3 className="events__title">
          <span>Events</span>
          <div className="events__title-more">
            <span>More</span>
            <FontAwesomeIcon icon={faChevronRight} className="events__title-icon"></FontAwesomeIcon>
          </div>
        </h3>
      </a>
      <div className="events__list">
        {eventsPreview.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};
export default Events;
