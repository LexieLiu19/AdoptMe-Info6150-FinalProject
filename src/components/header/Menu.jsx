import DarkModeButton from './DarkModeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const menu = [
  { name: 'Home', path: '' },
  { name: 'Adoption', path: '' },
  { name: 'Events', path: '' },
  { name: 'About', path: '' },
  { name: 'Careers', path: '' },
];

const Menu = ({ setPage, darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      toggleMenu();
    }
  };

  const list = menu.map((item) => {
    return (
      <li key={item.name} className="header__menu-item">
        <a
          onClick={(e) => {
            e.preventDefault();
            setPage(item.name);
            setMenuOpen(false);
          }}
          href={item.path}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <nav className="header__menu" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
      {!isMenuOpen && (
        <a
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onClick={toggleMenu}
          className={`header__togglemenu_container ${isMenuOpen ? '' : 'no-show'}`}
        >
          <FontAwesomeIcon
            icon={!isMenuOpen && faBars}
            className="header__menu-icon menu__icon-open"
          />
        </a>
      )}

      <div className={isMenuOpen ? 'header__menu-show' : 'header__menu-hide'}>
        <a
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onClick={toggleMenu}
          className="header__togglemenu_container"
        >
          {isMenuOpen && (
            <FontAwesomeIcon icon={faXmark} className="header__menu-icon menu__icon-close" />
          )}
        </a>
        <ul className="header__menu-list">{list}</ul>
        <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
};
export default Menu;
