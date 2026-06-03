import {
  Bus,
  CheckCircle2,
  Clock3,
  Hotel,
  MapPin,
  Plane,
  Users,
  Utensils,
} from 'lucide-react';
import { packages, siteInfo } from '../data/siteData';

function PackageCard({ item }) {
  return (
    <article className="package-card">
      <img src={item.image} alt="" />
      <div className="package-body">
        <a href="#" className="package-title">
          {item.title}
        </a>
        <div className="package-meta">
          <span>
            <Clock3 size={16} />
            {item.duration}
          </span>
          <span>
            <MapPin size={16} />
            {item.places}
          </span>
        </div>
        <div className="inclusive">
          <CheckCircle2 size={17} />
          All Inclusive
        </div>
        <div className="includes">
          <span>
            <Hotel size={16} />
            Hotel
          </span>
          <span>
            <Utensils size={16} />
            Meals
          </span>
          <span>
            <Bus size={16} />
            Transport
          </span>
          <span>
            <Plane size={16} />
            Sightseeing
          </span>
        </div>
        <small>Excludes train, flight fare and personal expenses.</small>
        <div className="card-actions">
          <a href={siteInfo.phoneHref}>Call Us</a>
          <button type="button">View Detail</button>
        </div>
        <p className="guest-count">
          <Users size={15} />
          {item.guests}
        </p>
      </div>
    </article>
  );
}

export default function Packages() {
  return (
    <section className="section" id="packages">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Popular Packages</p>
          <h2>Our most requested travel plans</h2>
        </div>
        <a href="#">View All</a>
      </div>
      <div className="package-grid">
        {packages.map((item) => (
          <PackageCard item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}
