/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/header/Header";
import "../service.css";
import Footer from "../../../components/footer/Footer";
import {
  compareImagesCorporate,
  OfficefurnitureImage,
  compareImagesGypsumFalse,
} from "../../../utils/compareImages";
import { imgStyle } from "../../../utils/imageStyle";
import { Helmet } from "react-helmet";


const randomImages = [
  {
    url: "https://www.cherryhill.in/img/blume-global/bg1.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/blume-global/bg2.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/blume-global/bg6.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/blume-global/bg5.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/blume-global/bg8.jpg",
  },
];

const InteriorDesign = () => {
  const [imageUrl, setImageUrl] = useState(randomImages[0].url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageUrl = (url) => {
    setImageUrl(url);
  };

  return (
    <>
      <div className="container">
        <Header />
        {/* <hr /> */}
        <div
          style={{
            height: "100px",
            borderBottom: "1px solid gray",
            width: "100%",
          }}
        />

        <Helmet>

          <title>Expert Interior Design Consultant in India | Interior Karwalo</title>
          <meta name="description" content="Transform your space with our expert interior design services. Get personalized consultation from the leading Interior Design Consultant in India." />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="interior design consultant in india" />
          <link rel="canonical" href="https://interiorkarwalo.com/services/interior-design" />

          {/* Open Graph Meta Data */}
          <meta property="og:title" content="Expert Interior Design Consultant in India | Interior Karwalo" />
          <meta property="og:description" content="Transform your space with our expert interior design services. Get personalized consultation from the leading Interior Design Consultant in India." />
          <meta property="og:image" content="/images/logo.svg" />
          <meta property="og:url" content="https://interiorkarwalo.com/services/interior-design" />
          <meta property="og:type" content="website" />
        </Helmet>

        <div className="service-image-container">
          <div className="service-image-container-left">
            <h2 className="service-main-title-d">
              Interior Design Consultant in India
            </h2>
            <p>
              Interior Karwalo has put much effort into being one of India's
              leading interior and architectural design firms.
            </p>
            <button className="btn">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
          <div className="service-image-container-right">
            <img src={imageUrl} alt="" />
            <div>
              {randomImages.map((item) => (
                <img
                  key={item.url}
                  src={item.url}
                  onMouseEnter={() => handleImageUrl(item.url)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="category--all-container">
          <div>
            <h2>Interior Design Consultant in India</h2>
            <p>
              Interior Karwalo has put much effort into being one of India's
              leading interior and architectural design firms. We've finished
              several commercial and residential interior design projects
              throughout all cities and six countries that exceed the pleasure
              of our clients thanks to our transparent costs and opulent design
              vision, including automation-led strategy. Being seasoned
              architects as well as interior decorators in India, we are
              accountable for the overall appearance of any project we take on.
            </p>
          </div>

          <div>
            <h3>How We Design Interiors?</h3>
            <p>
              We start by planning the building's physical layout before
              designing the interiors, which, depending on the situation,
              essentially give the living and working area life.
            </p>
          </div>
          <div>
            <h3>India's top 1% Gypsum consultants</h3>
            <p>
              With over 50 completed projects, we have made a name for ourselves
              as India's top drywall contracting experts.
            </p>
          </div>
          <div style={{ display: "flex" }} className="c-container">
            <div style={{ position: "relative", flex: 1 }}>
              <img
                style={imgStyle}
                src={`${compareImagesGypsumFalse[0].before}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                Before
              </button>
            </div>

            <div style={{ position: "relative", flex: 1, marginLeft: "10px" }}>
              <img
                style={imgStyle}
                src={`${compareImagesGypsumFalse[0].after}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                After
              </button>
            </div>
          </div>
          <div>
            <h3>Our Specialised Approach To Interior Design & Architecture</h3>
            <p>
              At Interior Karwalo, we all believe that every building and
              interior design project should be approached with a holistic
              design approach. The bulk of our interior decorating work and
              offerings, which include the outside, the interior space, the
              finishes, the furniture, and the lighting, all that is frequently
              custom-made by us, showcase this passion. Our work is defined by
              the shape design, the use of various materials, and the
              implementation of colour manipulations.
              <br />
              With a staff of more than 50 individuals, including architects,
              interior decorators, site supervisors, and more, we serve as a
              one-stop destination for both architecture and interiors.
              <br />
              All your project's requirements may be met in one location,
              providing efficient team cooperation while bringing an
              architectural and design project to life. We are not constrained
              to one design approach because of the size of our team. We are
              experts in controlling budget expectations and will advise you in
              real time.
              <br />
              By ensuring you communicate with vendors directly, we preserve
              complete openness with our clients. Besides, Interior Karwalo
              provides prompt delivery, emphasises originality, and is aware of
              the skill level of our personnel.
            </p>
          </div>

          <div>
            <h3>We offer a 3D view of the interior planned</h3>
            <p>
              Our skilled and creative staff offers consultations starting with
              site measurement, interior plan possibilities, 3D views, material
              finalisation, and a BOQ. We established fresh benchmarks and
              guidelines for the sector to adhere to. We manage commercial
              offices, retail stores, restaurants, cafés, food courts, take-out
              joints, hotel rooms, bars, lounges, and residential project
              interiors.
              <br />
              We also offer consulting services in the areas of electrical,
              civil, HVAC, firefighting, grid system, and plumbing, in addition
              to interior design.
            </p>
          </div>
          <div>
            <h3>Consultancy for all types of interior</h3>
            <p>
              Interior Karwalo is a renowned top interior decorator in India. We
              offer interior design services for businesses, including
              restaurants, cafes, lounges, offices, shopping malls, private
              homes, and public spaces like kiosks and food courts.
              <br />
              As a leading Interior Design consulting service, we provide the
              greatest interior structuring and overall project management
              services. The work schedule administration is directly related to
              the material purchase, drawing preparation, and workforce
              management, which are the most important. We have a lot of happy
              clients who choose us for their interior design consulting
              projects where everything from the actual depictions to the
              overall extravagance is ready to be used.
              <br />
              We get a lot of questions regarding interior designers for homes,
              domestic interior design as well as architect services, interior
              designing design services, etc. Our consulting services provide
              solutions to commonly asked questions; as a result, we have
              purposefully responded to all questions as promptly as possible.
              <br />
              Interior feels it is the accountability to present the clients
              with the greatest options possible. Analysing a project's success
              rate and reputation as an interior design team in India is the
              best approach to identifying one. Interior Karwalo is the top
              interior design consulting firm in India, so if you pick us, we'll
              be here whenever you need us.
            </p>
          </div>
          <div style={{ display: "flex" }} className="c-container">
            <div style={{ position: "relative", flex: 1 }}>
              <img
                style={imgStyle}
                src={`${compareImagesCorporate[0].before}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                Before
              </button>
            </div>

            <div style={{ position: "relative", flex: 1, marginLeft: "10px" }}>
              <img
                style={imgStyle}
                src={`${compareImagesCorporate[0].after}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                After
              </button>
            </div>
          </div>
          <div>
            <h3>Why use a consulting service for interior design?</h3>
            <p>
              We may relax and spend time with the people we love at home. These
              are the areas where most people spend their time since you spend
              most of the day at work.
              <br />
              So, selecting interior design advisory services could be the
              finest thing one could ever do for your neighbourhood. Your home
              or place of business will be designed and decorated by an interior
              designer who will also provide you with any advice you may
              require. Are you also wondering how much the entire service cost?
              <br />
              The most crucial factor for the client is the budget. Before
              accepting any assignment, we discuss it as an interior decoration
              team in India. We are the greatest interior design consulting
              company in India, with few of them.
              <br />
              Your project will determine how much you pay for our consulting
              services. If you want the best interior decorator in India, look
              no further. Make an appointment with us!
              <br />
              Interior Karwalo is a leading commercial interior designer and
              interior home decorator. To look at our other services, you can
              check our website and explore more about us. If you want
              consultation regarding the interior of your residential and
              commercial space, you can directly talk with us or mail us right
              now.
            </p>
          </div>
          <div>
            <h3>Fire-Resistant Walls</h3>
            <p>
              A fire-rated drywall helps to contain the fire inside the
              partition and stops smoke from leaking into other spaces.
              Fire-rated gypsum drywall has glass fibre reinforcing and around
              21% of its weight in water that has been chemically mixed. Water
              slowly releases steam as it comes into contact with fire, delaying
              heat transfer.
              <br />
              Our experienced staff has worked on projects for County,
              Government, National, domestic, entertainment, medical, retail,
              F&B, historic restoration, and more. We also have approximately 5+
              years of total expertise in construction. A testament to our
              dedication to safety is that our team of over 50 people has an
              Experience Modification Rate higher than the industry norm.
            </p>
          </div>
          <div style={{ display: "flex" }} className="c-container">
            <div style={{ position: "relative", flex: 1 }}>
              <img
                style={imgStyle}
                src={`${OfficefurnitureImage[0].before}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                Before
              </button>
            </div>

            <div style={{ position: "relative", flex: 1, marginLeft: "10px" }}>
              <img
                style={imgStyle}
                src={`${OfficefurnitureImage[0].after}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                After
              </button>
            </div>
          </div>
          <div>
            <h3>Why do you need a Gypsum partition wall?</h3>
            <div>
              <h4>Economical installation</h4>
              <p>
                Drywall not only saves time but also guarantees affordable
                installation. For a few days or longer, you aren't required to
                hire many individuals and can eventually save a significant sum
                of money that would have been spent on installing a brick wall.
              </p>
            </div>
            <div>
              <h4>Lowers the construction cost</h4>
              <p>
                Every new cement-based building you develop adds weight to the
                entire structure. It is as much as ten times lighter if you use
                gypsum plasterboard in its place. As a result, it saves on
                shipping raw materials and adds structural costs.
              </p>
            </div>
            <div>
              <h4>Sound reduction</h4>
              <p>
                The majority of gypsum plasterboards comprise many layers made
                of various materials. The effectiveness of the sound decreases
                with each layer that it passes. For instance, it also provides
                unparalleled beauty and is ideal for various acoustic
                requirements.
                <br />
                So, do you want to get a consultation from our expert? If yes,
                you can talk with our professional contractors and make some
                best changes in your commercial & industrial space.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InteriorDesign;
