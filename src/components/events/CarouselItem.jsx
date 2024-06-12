const CarouselItem = ({ event }) => {
  return (
    <div className="carousel__item">
      <img src={event.image} alt={event.eventName} className="carousel__item-img" />
      <div className="carousel__item-text">{event.eventName}</div>
    </div>
  );
};
export default CarouselItem;
