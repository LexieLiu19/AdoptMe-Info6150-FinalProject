const DarkModeButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="toggleDarkMode__button-container">
      <button className="toggleDarkMode__button" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};
export default DarkModeButton;
