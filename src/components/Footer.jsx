import Brand from './Brand';
import { siteInfo } from '../data/siteData';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="contact">
      <div>
        <Brand footer />
        <p>{t('React-only front-end prototype for tour packages, destinations, hotels and taxis.')}</p>
      </div>
      <div>
        <h3>{t('Quick Links')}</h3>
        <a href="/#packages">{t('Packages')}</a>
        <a href="/#booking">{t('Book Taxi')}</a>
        <a href="/">{t('Hotels')}</a>
      </div>
      <div>
        <h3>{t('Contact')}</h3>
        <a href={siteInfo.phoneHref}>{siteInfo.phoneDisplay}</a>
        <span>{t(siteInfo.location)}</span>
      </div>
    </footer>
  );
}
