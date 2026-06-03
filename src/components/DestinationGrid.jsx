import { destinationFilters, destinations } from '../data/siteData';
import { useLanguage } from '../i18n/LanguageContext';

export default function DestinationGrid() {
  const { t } = useLanguage();

  return (
    <section className="destination-band">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t('Popular Destinations')}</p>
          <h2>{t('They loved it, you will love it too')}</h2>
        </div>
        <a href="#">{t('View All')}</a>
      </div>
      <div className="filter-row">
        {destinationFilters.map((item) => (
          <button className={item === 'All' ? 'selected' : ''} type="button" key={item}>
            {t(item)}
          </button>
        ))}
      </div>
      <div className="destination-grid">
        {destinations.map((destination) => (
          <a className="destination-tile" href="#" key={destination.name}>
            <span>{t(destination.name)}</span>
            <small>{t(destination.packages)}</small>
            <em>{t(destination.popularity)}</em>
          </a>
        ))}
      </div>
    </section>
  );
}
