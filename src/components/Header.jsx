import { useEffect, useState } from 'react';
import { ChevronDown, Menu, Moon, Phone, Sun } from 'lucide-react';
import Brand from './Brand';
import { navGroups, siteInfo } from '../data/siteData';

export default function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
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
        <button className="text-button">Customized Tour Plan</button>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          {isDark ? 'Light' : 'Dark'}
        </button>
      </div>
      <nav className="navbar" aria-label="Main navigation">
        <Brand />
        <div className="nav-links">
          <a href="#">Home</a>
          {navGroups.map((group) => (
            <div className="nav-dropdown" key={group.label}>
              <button>
                {group.label}
                <ChevronDown size={15} />
              </button>
              <div className="dropdown-menu">
                {group.items.map((item) => (
                  <a href="#" key={item}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a href="#packages">Packages</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="icon-button" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </nav>
    </header>
  );
}
