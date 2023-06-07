import React from 'react';
import Content from '../components/content/Content';
import Feed from '../components/feed/Feed';
import Hero from '../components/hero/Hero';
import { Helmet } from 'react-helmet'

import Footer from '../components/footer/Footer';
import Spinner from '../components/spinner/Spinner';

import Gallery from './Gallery';
import Testimonial from '../components/testimonials/Testimonial';
import Teams from '../components/teams/Teams';
import ContactForm from '../components/contact-form/ContactForm';

const Home = ({ toggleTheme }) => {
  return (
    <div style={{ transition: 'all 1s ease-in-out' }}>
      <Helmet>
        <title>Dream House Setup by Interior Karwalo</title>
        <meta name='description' content='Interior Karwalo Setup your Dream House Interior, Designed by our Professional Interior Designers' />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="interior karwalo, interior" />
        <link rel="canonical" href="https://interiorkarwalo.com/home" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Interior Karwalo",
            "alternateName": "Interior Karwalo",
            "url": "https://interiorkarwalo.com/",
            "logo": "https://interiorkarwalo.com/interior-design-logo.svg",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+1888-297-6869",
              "contactType": "customer service",
              "contactOption": "TollFree",
              "areaServed": "US",
              "availableLanguage": "en"
            }, {
              "@type": "ContactPoint",
              "telephone": "+91 8630819631",
              "contactType": "customer service",
              "contactOption": "TollFree",
              "areaServed": "IN",
              "availableLanguage": "Hindi"
            }]
          })
          }
        </script>
      </Helmet>
      {/* <Header toggleTheme={toggleTheme} /> */}
      <div data-aos="zoom-in-up">
        <Hero />
      </div>
      {/* <Slider /> */}

      <Content />

      <Spinner />
      <div data-aos="fade-right">
        <Feed
          title="One-stop shop for all things in interior"
          desc="We are a full-service luxurious Interior Design studio serving nationwide residential and commercial clients. Our services include innovative and advanced interior design setups to meet our client's personalities and lifestyles. We have brought exceptional designing ideas with proven experimental techniques for all our service categories."
          url="/images/one stop section/one stop shop Interior karwalo.webp"
        />
      </div>
      {/* <Category /> */}
      <div data-aos="fade-up-right">
        <Testimonial />
      </div>
      <div data-aos="zoom-in-up">
        <Gallery />
      </div>
      <div data-aos="zoom-out">
        <Teams />
      </div>
      <div data-aos="fade-up-right">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
