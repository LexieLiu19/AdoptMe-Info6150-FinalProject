import { useEffect, useRef } from 'react';

const MainContent = ({ children }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView();
    }
  }, []);

  return (
    <div id="main-content" ref={mainRef}>
      {children}
    </div>
  );
};

export default MainContent;
