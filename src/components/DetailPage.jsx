import { CalendarDays, CheckCircle2, Clock3, MapPin } from 'lucide-react';
import { siteInfo } from '../data/siteData';
import { useLanguage } from '../i18n/LanguageContext';

export default function DetailPage({ page }) {
  const { t } = useLanguage();

  return (
    <main>
      <section className="detail-hero">
        <img src={page.image} alt="" />
        <div className="detail-hero-copy">
          <p className="eyebrow">{t('Tour Package')}</p>
          <h1>{t(page.title)}</h1>
          <div className="detail-meta">
            <span>
              <Clock3 size={18} />
              {t(page.duration)}
            </span>
            <span>
              <MapPin size={18} />
              {t(page.places)}
            </span>
          </div>
        </div>
      </section>

      <section className="section detail-section">
        <div className="detail-layout">
          <article className="detail-main">
            <section className="detail-block">
              <p className="eyebrow">{t('About')}</p>
              <h2>{t(`About ${page.title}`)}</h2>
              <p>{t(page.about)}</p>
            </section>

            <section className="detail-block">
              <p className="eyebrow">{t('Itinerary')}</p>
              <h2>{t('Tour Itinerary')}</h2>
              <div className="itinerary-list">
                {page.itinerary.map((item) => (
                  <div className="itinerary-item" key={`${item.day}-${item.title}`}>
                    <span>{t(item.day)}</span>
                    <div>
                      <h3>{t(item.title)}</h3>
                      <p>{t(item.description)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-block">
              <p className="eyebrow">{t('Tour Information')}</p>
              <h2>{t('Inclusions and Notes')}</h2>
              <ul className="tour-info-list">
                {page.tourInformation.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="detail-aside">
            <h2>{t('Need trip help?')}</h2>
            <p>{t('Call us for route, hotel and cab customization before booking.')}</p>
            <a className="primary-action" href={siteInfo.phoneHref}>
              {t('Call Us')}
            </a>
            <div className="aside-facts">
              <span>
                <CalendarDays size={17} />
                {t('Flexible dates')}
              </span>
              <span>
                <MapPin size={17} />
                {t(siteInfo.location)}
              </span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
