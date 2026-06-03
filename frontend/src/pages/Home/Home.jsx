import '@styles/pages/home.css';

import About from '@components/Home/About/About.jsx';
import Benefits from '@components/Home/Benefits/Benefits.jsx';
import ContactSection from '@components/Home/ContactSection/ContactSection.jsx';
import CTA from '@components/Home/CTA/CTA.jsx';
import Hero from '@components/Home/Hero/Hero.jsx';
import Services from '@components/Home/Services/Services.jsx';
import Testimonials from '@components/Home/Testimonials/Testimonials.jsx';

function Home() {
    return (
        <>
            <Hero/>
            <Services/>
            <About/>
            <Benefits/>
            <Testimonials/>
            <CTA/>
            <ContactSection/>
        </>
    );
}

export default Home;