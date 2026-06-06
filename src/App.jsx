import Categories from './components/Categories';
import DestinationGrid from './components/DestinationGrid';
import DetailPage from './components/DetailPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import QuickDestinations from './components/QuickDestinations';
import RegionCards from './components/RegionCards';
import { detailPageMap } from './data/siteData';

function getCurrentDetailPage() {
  const slug = window.location.pathname.replace(/^\/+|\/+$/g, '');
  return slug ? detailPageMap[slug] : null;
}

export default function App() {
  const detailPage = getCurrentDetailPage();

  if (detailPage) {
    return (
      <>
        <Header />
        <DetailPage page={detailPage} />
        <Categories />
        <Footer />
      </>
    );
  }

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
