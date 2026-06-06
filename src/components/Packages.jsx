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
import { useLanguage } from '../i18n/LanguageContext';

function PackageCard({ item }) {
  const { t } = useLanguage();

  return (
    <article className="package-card">
      <img src={item.image} alt="" />
      <div className="package-body">
        <a href={`/${item.slug}`} className="package-title">
          {t(item.title)}
        </a>
        <div className="package-meta">
          <span>
            <Clock3 size={16} />
            {t(item.duration)}
          </span>
          <span>
            <MapPin size={16} />
            {t(item.places)}
          </span>
        </div>
        <div className="inclusive">
          <CheckCircle2 size={17} />
          {t('All Inclusive')}
        </div>
        <div className="includes">
          <span>
            <Hotel size={16} />
            {t('Hotel')}
          </span>
          <span>
            <Utensils size={16} />
            {t('Meals')}
          </span>
          <span>
            <Bus size={16} />
            {t('Transport')}
          </span>
          <span>
            <Plane size={16} />
            {t('Sightseeing')}
          </span>
        </div>
        <small>{t('Excludes train, flight fare and personal expenses.')}</small>
        <div className="card-actions">
          <a href={siteInfo.phoneHref}>{t('Call Us')}</a>
          <a className="detail-action" href={`/${item.slug}`}>
            {t('View Detail')}
          </a>
        </div>
        <p className="guest-count">
          <Users size={15} />
          {t(item.guests)}
        </p>
      </div>
    </article>
  );
}

export default function Packages() {
  const { t } = useLanguage();

  return (
    <section className="section" id="packages">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t('Popular Packages')}</p>
          <h2>{t('Our most requested travel plans')}</h2>
        </div>
        <a href="#">{t('View All')}</a>
      </div>
      <div className="package-grid">
        {packages.map((item) => (
          <PackageCard item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}
