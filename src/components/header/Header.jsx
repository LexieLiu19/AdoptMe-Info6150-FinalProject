import Menu from './Menu';
import Logo from './Logo';
import './Header.css';

const Header = ({ setPage, toggleDarkMode, darkMode }) => {
  return (
    <header className="header">
      <div className="header__content">
        <Logo setPage={setPage} />
        <Menu setPage={setPage} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </header>
  );
};
export default Header;
