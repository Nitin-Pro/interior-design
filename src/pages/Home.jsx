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


        <title>Interior Karwalo | Professional Interior Design Services</title>

        <meta name='description' content="Elevate your home or office with Interior Karwalo. We specialize in transforming spaces to reflect your style and needs" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="interior karwalo" />
        <link rel="canonical" href="https://interiorkarwalo.com/home" />
        {/* Open Graph Meta Data */}
        <meta property="og:title" content="Interior Karwalo | Professional Interior Design Services" />
        <meta property="og:description" content="Elevate your home or office with Interior Karwalo. We specialize in transforming spaces to reflect your style and needs" />
        <meta property="og:image" content="/images/logo.svg" />
        <meta property="og:url" content="https://interiorkarwalo.com/home" />
        <meta property="og:type" content="website" />


        {/* Organization Schema Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Interior Karwalo",
            "alternateName": "Interior Karwalo",
            "url": "https://interiorkarwalo.com/home",
            "logo": "https://interiorkarwalo.com/interior-design-logo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 8630819631",
              "contactType": "customer service",
              "contactOption": "TollFree",
              "areaServed": "IN",
              "availableLanguage": ["Hindi", "en"]
            },
            "sameAs": [
              "https://www.facebook.com/interiorkarwalo",
              "https://www.instagram.com/interiorkarwalo/",
              "https://www.linkedin.com/company/interior-karwalo/"
            ]
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
