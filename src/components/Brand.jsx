import { siteInfo } from '../data/siteData';

export default function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' footer-brand' : ''}`} href="#">
      <span className="logo-mark" aria-hidden="true">D</span>
      <span className="brand-copy">
        <span>{siteInfo.shortName}</span>
        <strong>{siteInfo.tagline}</strong>
      </span>
    </a>
  );
}
