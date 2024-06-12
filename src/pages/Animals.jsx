import animals from '../data/animals.js';
import Animal from '../components/animals/Animal.jsx';
import './Animals.css';

const Animals = ({ selectedType, setSelectedType }) => {
  const filteredAnimals =
    selectedType === 'all' ? animals : animals.filter((animal) => animal.category === selectedType);

  const handleSelectChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <section className="animals">
      <div className="animals__title">
        <h2>Find your fur-ever friend today</h2>
        <p>
          Our animal adoption website helps you find the perfect pet match from reputable shelters
          and rescues across the country. With our easy-to-use search tools and dedicated team of
          professionals, adopting a pet has never been easier. Let&apos;s find your furever friend
          today!
        </p>
      </div>

      <div>
        <form className="animals__select">
          <label htmlFor="animal-type">Select Animal Type</label>
          <select
            className="animals__select-input"
            id="animal-type"
            value={selectedType}
            onChange={handleSelectChange}
            name="selectedType"
          >
            <option value="all">All</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Other">Other Animals</option>
          </select>
        </form>
      </div>

      <div className="animals__content">
        {filteredAnimals.map((animal) => {
          return <Animal key={animal.id} animal={animal} />;
        })}
      </div>
    </section>
  );
};
export default Animals;
