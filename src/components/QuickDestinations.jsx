import { MapPin } from 'lucide-react';
import { quickDestinations } from '../data/siteData';
import { useLanguage } from '../i18n/LanguageContext';

export default function QuickDestinations() {
  const { t } = useLanguage();

  return (
    <section className="section compact">
      <div className="quick-grid">
        {quickDestinations.map((destination) => (
          <a className="quick-destination" href={`/${destination.slug}`} key={destination.name}>
            <MapPin size={20} />
            <strong>{t(destination.name)}</strong>
            <span>{t(destination.days)}</span>
            <small>{t(destination.packages)}</small>
          </a>
        ))}
      </div>
    </section>
  );
}
