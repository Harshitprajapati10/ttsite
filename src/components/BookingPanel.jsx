import { Car, Search } from 'lucide-react';
import { endingDestinations, searchDestinations, startingDestinations } from '../data/siteData';
import { useLanguage } from '../i18n/LanguageContext';

export default function BookingPanel() {
  const { t } = useLanguage();

  return (
    <section className="booking-panel" aria-label="Booking search">
      <div className="tabs" role="tablist" aria-label="Booking type">
        <button className="active">{t('Packages')}</button>
        <button>{t('Hotels')}</button>
        <button>{t('Book Taxi')}</button>
      </div>
      <form className="package-search">
        <label>
          {t('Destination')}
          <select>
            <option>{t('Select destination')}</option>
            {searchDestinations.map((destination) => (
              <option key={destination}>{t(destination)}</option>
            ))}
          </select>
        </label>
        <label>
          {t('From')}
          <select defaultValue="">
            <option value="" disabled>
              {t('Starting destination')}
            </option>
            {startingDestinations.map((destination) => (
              <option key={destination}>{t(destination)}</option>
            ))}
          </select>
        </label>
        <label>
          {t('To')}
          <select defaultValue="">
            <option value="" disabled>
              {t('Ending destination')}
            </option>
            {endingDestinations.map((destination) => (
              <option key={destination}>{t(destination)}</option>
            ))}
          </select>
        </label>
        <label>
          {t('Guests')}
          <input type="number" min="1" placeholder="2" />
        </label>
        <button type="button">
          <Search size={18} />
          {t('Search')}
        </button>
      </form>
      <form className="taxi-search">
        <label>
          {t('From City')}
          <input type="text" placeholder={t('Pickup city')} />
        </label>
        <label>
          {t('Drop City')}
          <input type="text" placeholder={t('Drop city')} />
        </label>
        <label>
          {t('Pickup Date & Time')}
          <input type="datetime-local" />
        </label>
        <label>
          {t('Guest Name')}
          <input type="text" placeholder={t('Full name')} />
        </label>
        <label>
          {t('Phone Number')}
          <input type="tel" placeholder={t('Mobile number')} />
        </label>
        <label>
          {t('Persons')}
          <input type="number" min="1" placeholder="4" />
        </label>
        <button type="button">
          <Car size={18} />
          {t('Enquire')}
        </button>
      </form>
    </section>
  );
}
