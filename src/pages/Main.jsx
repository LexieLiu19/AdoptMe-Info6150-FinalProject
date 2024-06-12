import Banner from '../components/main/Banner';
import Categories from '../components/main/Categories';
import Subscribe from '../components/main/Subscribe';
import Events from '../components/main/Events';

import './Main.css';

const Main = ({ setPage, selectedType, setSelectedType }) => {
  return (
    <main className="main">
      <Banner />
      <Categories setPage={setPage} selectedType={selectedType} setSelectedType={setSelectedType} />
      <Events setPage={setPage} />
      <Subscribe />
    </main>
  );
};
export default Main;
