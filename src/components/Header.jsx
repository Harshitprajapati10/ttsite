import { useEffect, useState } from 'react';
import { ChevronDown, Menu, Moon, Phone, Sun } from 'lucide-react';
import Brand from './Brand';
import { navGroups, siteInfo } from '../data/siteData';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const { isHindi, t, toggleLanguage } = useLanguage();
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="site-header">
      <div className="topbar">
        <a href={siteInfo.phoneHref}>
          <Phone size={16} />
          {siteInfo.phoneDisplay}
        </a>
        <button className="text-button">{t('Customized Tour Plan')}</button>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          {t(isDark ? 'Light' : 'Dark')}
        </button>
        <button
          className="language-toggle"
          type="button"
          onClick={toggleLanguage}
          aria-label={t('Switch language')}
          title={t('Switch language')}
        >
          {isHindi ? 'EN' : 'HI'}
        </button>
      </div>
      <nav className="navbar" aria-label="Main navigation">
        <Brand />
        <div className="nav-links">
          <a href="#">{t('Home')}</a>
          {navGroups.map((group) => (
            <div className="nav-dropdown" key={group.label}>
              <button>
                {t(group.label)}
                <ChevronDown size={15} />
              </button>
              <div className="dropdown-menu">
                {group.items.map((item) => (
                  <a href="#" key={item}>
                    {t(item)}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a href="#packages">{t('Packages')}</a>
          <a href="#contact">{t('Contact')}</a>
        </div>
        <button className="icon-button" aria-label={t('Open menu')}>
          <Menu size={22} />
        </button>
      </nav>
    </header>
  );
}
