import { ShieldCheck, Star } from 'lucide-react';
import { categories } from '../data/siteData';

export default function Categories() {
  return (
    <section className="section">
      <div className="split">
        <div>
          <p className="eyebrow">Best Seller Packages</p>
          <h2>What are you looking for?</h2>
          <div className="category-list">
            {categories.map((category) => (
              <button type="button" key={category}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="trust-panel">
          <ShieldCheck size={28} />
          <h3>Private taxi and package enquiries</h3>
          <p>
            This front end captures trip intent only. Payment, login, OTP and backend verification
            flows are intentionally left out for later development.
          </p>
          <div className="rating">
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
            <Star fill="currentColor" size={18} />
            <span>Trusted by pilgrimage and family travellers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
