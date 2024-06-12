import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

const socials = [
  {
    name: 'Instagram',
    icon: faInstagram,
    path: 'https://www.instagram.com/petfinder',
  },
  { name: 'FaceBook', icon: faFacebook, path: 'https://www.facebook.com/Petfinder/' },
  { name: 'TikTok', icon: faTiktok, path: 'https://www.tiktok.com/tag/cat' },
  { name: 'Twitter', icon: faTwitter, path: 'https://twitter.com/petfinder' },
];

const list = socials.map((social) => {
  return (
    <li key={social.name} className="footer__social">
      <a href={social.path}>
        <FontAwesomeIcon icon={social.icon} className="footer__social-icon" />
        <span>{social.name}</span>
      </a>
    </li>
  );
});
function FooterSocials() {
  return (
    <div className="footer__column">
      <h3 className="footer__column-title">Follow Us:</h3>
      <ul className="footer__column-list">{list}</ul>
    </div>
  );
}

export default FooterSocials;
