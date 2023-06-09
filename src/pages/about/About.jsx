import Feed from '../../components/feed/Feed';
import Header from '../../components/header/Header';
import './about.css';
import AboutDetailCard from './AboutDetailCard';
import { Helmet } from 'react-helmet'
import intVideo from '../../assets/int.mp4';
import ChooseUs from '../../components/choose-us/ChooseUs';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

const desc1 =
  'Our organisations specialise in offering the best interior finishing to your commercial & residential space. We work for different organisations with the same level of dedication and attention. Our team can offer you an elegant yet astonishing look that aids beauty.';

const desc2 =
  'We aim to create a beautiful interior and give our clients an astonishing place to live. We are honoured by our clients who give us ideas. Our mission is to turn your ideas into reality. We promise to create a masterpiece which gives you an astonishing vibe!';

const About = () => {
  return (
    <>
      <Helmet>

        <title>About Interier Karwalo</title>
        <meta name="description" content="Top Interior Karwalo design services for commercial & residential spaces. Get inspired by our expert team." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="about interior karwalo" />
        <link rel="canonical" href="https://interiorkarwalo.com/about" />

        {/* Open Graph Meta Data */}
        <meta property="og:title" content="About Interier Karwalo" />
        <meta property="og:description" content="Top Interior Karwalo design services for commercial & residential spaces. Get inspired by our expert team." />
        <meta property="og:image" content="/images/logo.svg" />
        <meta property="og:url" content="https://interiorkarwalo.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="about">
        <Header />

        <div className="hero-wrapper">
          <h1 style={{ fontSize: '1.4rem' }}>Decoration Ideas</h1>
          <p>All the more reasons to get your dream home interiors now</p>
          <Link to="/contact">
            <button className="btn">Latest</button>
          </Link>
        </div>
      </div>
      <Feed
        title="About Interier Karwalo"
        desc="From a corporate house renovation to crafting & decorating office furniture, our inspiration team of designers works for you! The expert team of Interior Karwalo is the one-stop service that successfully covers the initial to a complex range of products. We provide the complete interior design service package, ensuring you enjoy exciting & stress-free service. "
        url="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <div className="about-video-div  container">
        <div className="about-video-video ">
          <h2>OUR VISION</h2>
          <video
            id="about-video"
            loop
            autoPlay
            className="intro-transition-video"
            muted
            style={{ opacity: 1 }}
          >
            <source
              data-video-id="intro.part1.loop"
              src={intVideo}
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="about-video-content">
          <img src="/vision1.gif" alt="" />
          <p>
            Our vision is to deliver stunning outcomes which meet your needs. We
            aspire to convey a sense of passion through our crafting &
            dedication to completing the task. We want to challenge & inspire
            the upcoming generations of clients through our productivity &
            outcomes.
          </p>
        </div>
      </div>

      <div className="about-video-div  container" style={{ marginTop: '1rem' }}>
        <div className="about-video-content">
          <img src="/mission.gif" alt="" />
          <p className="service-desc1-second-p">{desc2}</p>
        </div>
        <div className="about-video-video">
          <h2>Our Mission</h2>
          <img src="https://www.cherryhill.in/img/verint/6/24.jpg" alt="" />
        </div>
      </div>
      <div
        className="about-video-div container"
        style={{ marginTop: '1rem ', marginBottom: '1rem' }}
      >
        <div className="about-video-video">
          <h2> Our Philosophy</h2>
          <img src="https://www.cherryhill.in/img/bny/bny-2.jpg" alt="" />
        </div>
        <div className="about-video-content">
          <img src="/philosophy.gif" alt="" />
          <p>{desc1}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
