import logoImage from '../assets/logo/durga-tour-logo-v2.png';
import { siteInfo } from '../data/siteData';
import { useLanguage } from '../i18n/LanguageContext';

export default function Brand({ footer = false }) {
  const { t } = useLanguage();

  return (
    <a className={`brand${footer ? ' footer-brand' : ''}`} href="#">
      <span className="logo-mark" aria-hidden="true">
        <img src={logoImage} alt="" />
      </span>
      <span className="brand-copy">
        <span>{siteInfo.shortName}</span>
        <strong>{t(siteInfo.tagline)}</strong>
      </span>
    </a>
  );
}
