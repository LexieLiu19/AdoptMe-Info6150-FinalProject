import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Logo = ({ setPage }) => {
  return (
    <div className="header__logo">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          setPage('Home');
        }}
      >
        <h1 className="header__title">
          <FontAwesomeIcon icon={faPaw} className="header__logo" />
          <span>Adopt Me!</span>
        </h1>
      </a>
    </div>
  );
};
export default Logo;
