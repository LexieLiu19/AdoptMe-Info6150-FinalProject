import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './pages/Main';
import Animals from './pages/Animals';
import EventsPage from './pages/EventsPage';
import About from './pages/About';
import Careers from './pages/Careers';
import SkipLink from './components/skiplink/SkipLink';
import MainContent from './components/skiplink/MainContent';

function App() {
  const [page, setPage] = useState('Home');
  const [darkMode, setDarkMode] = useState(false);
  const [showSkipLink, setShowSkipLink] = useState(false);

  //filter animal type:
  const [selectedType, setSelectedType] = useState('all');

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  const handleTabDown = (e) => {
    if (e.key === 'Tab') {
      setShowSkipLink(true);
    }
    if (e.key === 'Escape') {
      setShowSkipLink(false);
    }
  };

  return (
    <div className={`app ${darkMode ? 'darkMode' : ''}`} onKeyDown={handleTabDown}>
      {showSkipLink && <SkipLink href="#main-content" label="Skip to main content" />}
      <Header setPage={setPage} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent>
        {page == 'Home' && (
          <Main setPage={setPage} selectedType={selectedType} setSelectedType={setSelectedType} />
        )}
        {page == 'Adoption' && (
          <Animals selectedType={selectedType} setSelectedType={setSelectedType} />
        )}
        {page == 'Events' && <EventsPage />}
        {page == 'About' && <About />}
        {page == 'Careers' && <Careers />}
      </MainContent>
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
