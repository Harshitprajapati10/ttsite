import { featuredRegions } from '../data/siteData';

export default function RegionCards() {
  return (
    <section className="section">
      <div className="region-grid">
        {featuredRegions.map((region) => (
          <a className="region-card" href="#" key={region.title}>
            <img src={region.image} alt="" />
            <span>{region.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
