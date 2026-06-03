import { MapPin } from 'lucide-react';
import { quickDestinations } from '../data/siteData';

export default function QuickDestinations() {
  return (
    <section className="section compact">
      <div className="quick-grid">
        {quickDestinations.map((destination) => (
          <a className="quick-destination" href="#" key={destination.name}>
            <MapPin size={20} />
            <strong>{destination.name}</strong>
            <span>{destination.days}</span>
            <small>{destination.packages}</small>
          </a>
        ))}
      </div>
    </section>
  );
}
