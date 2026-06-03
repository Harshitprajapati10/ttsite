import { CalendarDays, Phone } from 'lucide-react';
import BookingPanel from './BookingPanel';
import { siteInfo } from '../data/siteData';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">{t('Char Dham, Do Dham and Himalayan taxi packages')}</p>
          <h1>{t('Where Would You Like To Go?')}</h1>
          <p>
            {t(
              'Plan pilgrimage routes, mountain holidays, hotel stays and private cab travel from Haridwar, Delhi and Dehradun.',
            )}
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#booking">
              <CalendarDays size={18} />
              {t('Plan Trip')}
            </a>
            <a className="secondary-action" href={siteInfo.phoneHref}>
              <Phone size={18} />
              {t('Call Us')}
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
