import Brand from './Brand';
import { siteInfo } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <Brand footer />
        <p>React-only front-end prototype for tour packages, destinations, hotels and taxis.</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <a href="#packages">Packages</a>
        <a href="#booking">Book Taxi</a>
        <a href="#">Hotels</a>
      </div>
      <div>
        <h3>Contact</h3>
        <a href={siteInfo.phoneHref}>{siteInfo.phoneDisplay}</a>
        <span>{siteInfo.location}</span>
      </div>
    </footer>
  );
}
