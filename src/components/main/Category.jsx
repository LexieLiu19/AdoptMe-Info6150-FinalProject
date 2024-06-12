import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Category = ({ category, setPage, selectedType, setSelectedType }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedType(category.category);

    setPage('Adoption');
  };
  return (
    <div className="category">
      <a onClick={handleClick} href="/">
        <div className="category__image">
          <img src={category.image} alt={`category ${category.category}`} />
        </div>

        <h4 className="category__title">
          <span>Browse {category.category}</span>

          <FontAwesomeIcon icon={faChevronRight} className="category__title-icon"></FontAwesomeIcon>
        </h4>
        <p className="category__desc">{category.description}</p>
      </a>
    </div>
  );
};
export default Category;
