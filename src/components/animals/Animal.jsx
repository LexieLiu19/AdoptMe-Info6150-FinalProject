import { useRef } from 'react';
import Dialog from './Dialog';

const Animal = ({ animal }) => {
  const dialogRef = useRef();

  return (
    <div className="animal">
      <div className="animal__image">
        <img src={animal.image} alt="" />
      </div>

      <div className="animal__details">
        <h4 className="animal__details-title">{animal.name}</h4>
        <div className="animal__details-tags">
          <span>{animal.category}</span>
          <span> {animal.breed}</span>
          <span> {animal.age} years old</span>
          <span> {animal.location}</span>
        </div>
        <p>
          <span className="animal__details-emp"> Adoption Requirements:</span> <br />{' '}
          {animal.adoption_requirements}
        </p>
        <p>
          <span className="animal__details-emp"> About {animal.name}:</span>
          <br /> {animal.description}
        </p>
        <button className="animal__details-btn" onClick={() => dialogRef.current.showModal()}>
          Adopt {animal.name}
        </button>
      </div>
      <Dialog dialogRef={dialogRef} />
    </div>
  );
};
export default Animal;
