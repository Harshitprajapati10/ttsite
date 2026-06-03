import Categories from './components/Categories';
import DestinationGrid from './components/DestinationGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import QuickDestinations from './components/QuickDestinations';
import RegionCards from './components/RegionCards';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <RegionCards />
      <QuickDestinations />
      <Packages />
      <DestinationGrid />
      <Categories />
      <Footer />
    </>
  );
}
