import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scroll/ScrollToTop';
import Home from './pages/Home/Home';
import Team from './components/About/Team';
import Services from './components/Services/Services';
import Landscape from './components/service/Landscape';
import Hardscape from './components/service/Hardscape';
import Softscape from './components/service/Softscape';
import Poolscape from './components/service/Poolscape';
import Nightscape from './components/service/Nightscape';
import Waterscape from './components/service/Waterscape';
import Firescape from './components/service/Firescape';
import Courtscape from './components/service/Courtscape';
import Portfolio from './components/portfolio/Portfolio';
// import Socials from './components/socials/Socials';
import Contact from './components/contact/Contact';
import Faq from './components/faq/Faq';
import Testimonials from './components/About/Testimonials';
// import Vlog from './components/blog/Vlog';
// import DGallery from './components/portfolios/3DGallery';
// import DroneShot from './components/portfolios/DroneShot';
// import SocialVideo from './components/portfolios/SocialVideo';
// import Unsubscribe from './pages/Unsubscribe';
// import NewsletterVerification from './pages/NewsletterVerificartion';

// **Import your project page**
import BnProject from './components/portfolios/BnProject';
import GnProject from './components/portfolios/GnProject';
import KcProject from './components/portfolios/KcProject';
import HaProject from './components/portfolios/HaProject';
import ArProject from './components/portfolios/ArProject';
import GaProject from './components/portfolios/GaProject';
import TcProject from './components/portfolios/TcProject';
import CookieConsent from './components/CookieConsent';
import PageNotFound from './components/notFound/PageNotFound';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/portfolio/3d-gallery" element={<DGallery />} />
        <Route path="/portfolio/drone-shots" element={<DroneShot />} />
        <Route path="/portfolio/social-videos" element={<SocialVideo />} /> */}
        {/* <Route path="/social" element={<Socials />} />
        <Route path="/social/:slug" element={<Vlog />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/services/landscape" element={<Landscape />} />
        <Route path="/services/hardscape" element={<Hardscape />} />
        <Route path="/services/softscape" element={<Softscape />} />
        <Route path="/services/poolscape" element={<Poolscape />} />
        <Route path="/services/nightscape" element={<Nightscape />} />
        <Route path="/services/waterscape" element={<Waterscape />} />
        <Route path="/services/firescape" element={<Firescape />} />
        <Route path="/services/courtscape" element={<Courtscape />} />
        {/* <Route path="/verify-newsletter" element={<NewsletterVerification />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} /> */}
        {/* Add the new BnProject route */}
        <Route path="/portfolios/bnproject" element={<BnProject />} />
        <Route path="/portfolios/gnproject" element={<GnProject />} />
        <Route path="/portfolios/kcproject" element={<KcProject />} />
        <Route path="/portfolios/haproject" element={<HaProject />} />
        <Route path="/portfolios/arproject" element={<ArProject />} />
        <Route path="/portfolios/gaproject" element={<GaProject />} />
        <Route path="/portfolios/tcproject" element={<TcProject />} />
        {/* Add other routes here */}

        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <CookieConsent />
    </>
  );
}

export default App;