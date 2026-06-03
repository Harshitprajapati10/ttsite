import { CalendarDays, Phone } from 'lucide-react';
import BookingPanel from './BookingPanel';
import { siteInfo } from '../data/siteData';

export default function Hero() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Char Dham, Do Dham and Himalayan taxi packages</p>
          <h1>Where Would You Like To Go?</h1>
          <p>
            Plan pilgrimage routes, mountain holidays, hotel stays and private cab travel from
            Haridwar, Delhi and Dehradun.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#booking">
              <CalendarDays size={18} />
              Plan Trip
            </a>
            <a className="secondary-action" href={siteInfo.phoneHref}>
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </div>
      </section>
      <div id="booking" className="booking-wrap">
        <BookingPanel />
      </div>
    </main>
  );
}
