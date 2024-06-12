import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Category from './Category';
import { cat, dog, bird } from './imageIndex.js';
import './Categories.css';

const categories = [
  {
    category: 'Cat',
    path: '',
    image: cat,
    description:
      "Browse through our selection of lovable felines, each waiting for their forever home. From cuddly kittens to mature cats, there's a perfect match for you.",
  },
  {
    category: 'Dog',
    path: '',
    image: dog,
    description:
      'Find your new best friend on our dog adoption website. We have a wide variety of breeds, sizes, and personalities to choose from. Adopt a loyal companion today!',
  },
  {
    category: 'Other',
    path: '',
    image: bird,
    description:
      'Looking for a unique pet? Our adoption website features a diverse range of animals, from small and furry to large and scaly. Discover your new best friend and give them a loving home.',
  },
];

const Categories = ({ setPage, selectedType, setSelectedType }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setPage('Adoption');
  };
  return (
    <section className="categories">
      <a href="/" onClick={handleClick}>
        <h3 className="categories__title">
          <span>Adopt Animals</span>
          <div className="categories__title-more">
            <span>All Animals</span>
            <FontAwesomeIcon icon={faChevronRight} className="events__title-icon"></FontAwesomeIcon>
          </div>
        </h3>
      </a>
      <div className="categories__list">
        {categories.map((item) => (
          <Category
            key={item.category}
            category={item}
            setPage={setPage}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        ))}
      </div>
    </section>
  );
};
export default Categories;
