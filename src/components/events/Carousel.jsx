import CarouselItem from './CarouselItem';
import eventsData from '../../data/eventsData.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const bannerData = eventsData.slice(0, 4);

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = bannerData.length - 1;
    } else if (newIndex >= bannerData.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div className="carousel__inner">
        <CarouselItem event={bannerData[activeIndex]} />
      </div>

      <div className="carousel__buttons">
        <button
          className="carousel__button  carousel__button-left"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="carousel__button carousel__button-right"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
