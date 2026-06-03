import { destinationFilters, destinations } from '../data/siteData';

export default function DestinationGrid() {
  return (
    <section className="destination-band">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Popular Destinations</p>
          <h2>They loved it, you will love it too</h2>
        </div>
        <a href="#">View All</a>
      </div>
      <div className="filter-row">
        {destinationFilters.map((item) => (
          <button className={item === 'All' ? 'selected' : ''} type="button" key={item}>
            {item}
          </button>
        ))}
      </div>
      <div className="destination-grid">
        {destinations.map((destination) => (
          <a className="destination-tile" href="#" key={destination.name}>
            <span>{destination.name}</span>
            <small>{destination.packages}</small>
            <em>{destination.popularity}</em>
          </a>
        ))}
      </div>
    </section>
  );
}
