import { Car, Search } from 'lucide-react';
import { endingDestinations, searchDestinations, startingDestinations } from '../data/siteData';

export default function BookingPanel() {
  return (
    <section className="booking-panel" aria-label="Booking search">
      <div className="tabs" role="tablist" aria-label="Booking type">
        <button className="active">Packages</button>
        <button>Hotels</button>
        <button>Book Taxi</button>
      </div>
      <form className="package-search">
        <label>
          Destination
          <select>
            <option>Select destination</option>
            {searchDestinations.map((destination) => (
              <option key={destination}>{destination}</option>
            ))}
          </select>
        </label>
        <label>
          From
          <select defaultValue="">
            <option value="" disabled>
              Starting destination
            </option>
            {startingDestinations.map((destination) => (
              <option key={destination}>{destination}</option>
            ))}
          </select>
        </label>
        <label>
          To
          <select defaultValue="">
            <option value="" disabled>
              Ending destination
            </option>
            {endingDestinations.map((destination) => (
              <option key={destination}>{destination}</option>
            ))}
          </select>
        </label>
        <label>
          Guests
          <input type="number" min="1" placeholder="2" />
        </label>
        <button type="button">
          <Search size={18} />
          Search
        </button>
      </form>
      <form className="taxi-search">
        <label>
          From City
          <input type="text" placeholder="Pickup city" />
        </label>
        <label>
          Drop City
          <input type="text" placeholder="Drop city" />
        </label>
        <label>
          Pickup Date & Time
          <input type="datetime-local" />
        </label>
        <label>
          Guest Name
          <input type="text" placeholder="Full name" />
        </label>
        <label>
          Phone Number
          <input type="tel" placeholder="Mobile number" />
        </label>
        <label>
          Persons
          <input type="number" min="1" placeholder="4" />
        </label>
        <button type="button">
          <Car size={18} />
          Enquire
        </button>
      </form>
    </section>
  );
}
