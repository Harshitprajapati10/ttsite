import { ShieldCheck, Star } from 'lucide-react';
import { categories } from '../data/siteData';
import { useLanguage } from '../i18n/LanguageContext';

export default function Categories() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="split">
        <div>
          <p className="eyebrow">{t('Best Seller Packages')}</p>
          <h2>{t('What are you looking for?')}</h2>
          <div className="category-list">
            {categories.map((category) => (
              <button type="button" key={category}>
                {t(category)}
              </button>
            ))}
          </div>
        </div>
        <div className="trust-panel">
          <ShieldCheck size={28} />
          <h3>{t('Private taxi and package enquiries')}</h3>
          <p>
            {t(
              'This front end captures trip intent only. Payment, login, OTP and backend verification flows are intentionally left out for later development.',
            )}
          </p>
          <div className="rating">
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
            <span>{t('Trusted by pilgrimage and family travellers')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
