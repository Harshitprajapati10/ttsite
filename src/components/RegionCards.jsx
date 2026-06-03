import { featuredRegions } from '../data/siteData';
import { useLanguage } from '../i18n/LanguageContext';

export default function RegionCards() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="region-grid">
        {featuredRegions.map((region) => (
          <a className="region-card" href="#" key={region.title}>
            <img src={region.image} alt="" />
            <span>{t(region.title)}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
