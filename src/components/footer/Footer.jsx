import FooterColumn from './FooterColumn';
import FooterSocials from './FooterSocials';
import './Footer.css';

const company = [
  { name: 'About', page: 'About', path: '/' },
  { name: 'Careers', page: 'Careers', path: '/' },
];

const events = [
  { name: 'Browser Events', page: 'Events', path: '/' },
  { name: 'Adoption Application', page: 'Adoption', path: '/' },
];
const Footer = ({ setPage }) => {
  return (
    <footer className="footer">
      <FooterColumn title="Company" items={company} setPage={setPage} />
      <FooterColumn title="Events" items={events} setPage={setPage} />
      <FooterSocials />
    </footer>
  );
};
export default Footer;
