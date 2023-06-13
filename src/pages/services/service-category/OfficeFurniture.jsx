import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/header/Header";
import "../service.css";
import Footer from "../../../components/footer/Footer";
import {
  compareImagesCorporate,
  OfficefurnitureImage,
} from "../../../utils/compareImages";
import { imgStyle } from "../../../utils/imageStyle";
import { Helmet } from "react-helmet";

const randomImages = [
  {
    url: "https://www.cherryhill.in/img/optum/optum3.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/optum/optum5.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/optum/optum6.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/optum/optum2.jpg",
  },
  {
    url: "https://www.cherryhill.in/img/optum/optum7.jpg",
  },
];

const OfficeFurnitue = () => {
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

          <title>Modern Office Furniture in India | Interior Karwalo</title>
          <meta name="description" content="Upgrade your workspace with our quality office furniture solutions. Find the perfect furniture pieces for your workspace. Your trusted office furniture provider." />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="office furniture in india, office furniture" />
          <link rel="canonical" href="https://interiorkarwalo.com/services/office-furniture" />

          {/* Open Graph Meta Data */}
          <meta property="og:title" content="Modern Office Furniture in India | Interior Karwalo" />
          <meta property="og:description" content="Upgrade your workspace with our quality office furniture solutions. Find the perfect furniture pieces for your workspace. Your trusted office furniture provider." />
          <meta property="og:image" content="/images/logo.svg" />
          <meta property="og:url" content="https://interiorkarwalo.com/services/office-furniture" />
          <meta property="og:type" content="website" />
        </Helmet>
        <div className="service-image-container">
          <div className="service-image-container-left">
            <h2 className="service-main-title-d">Office Furniture In India</h2>
            <p>
              At Interior Karwalo, we are a "full service" business Office
              interior. We can plan, design, specify, install, and furnish all
              of your furniture needs for a new or existing office space.To
              allow you to sit back and watch your project come together.
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
            <h2>Office Furniture In India</h2>
            <p>
              At Interior Karwalo, we are a "full service" business Office
              interior. We can plan, design, specify, install, and furnish all
              of your furniture needs for a new or existing office space. To
              allow you to sit back and watch your project come together, we can
              also collaborate with your architect and designer as qualified and
              effective team members.
            </p>
          </div>
          <div>
            <div>
              <h4>• Design</h4>
              <p>
                We are specialists in workplace design, efficiency, and space
                utilisation. Together, we are prepared to face the most
                difficult workplace difficulties and offer our professional
                insights to assist you in creating smart workplaces.
              </p>
            </div>
            <div>
              <h4>• Order</h4>
              <p>
                We can purchase a variety of furnishings! The team of Interior
                Karwalo can connect you with a local supplier for any items your
                workplace could require, thanks to collaborations with several
                award-winning design firms!
              </p>
            </div>
            <div>
              <h4>• Install</h4>
              <p>
                We provide skilled labour, design services, workspace
                installation, consultancy, regional wealth management,
                integrated technology, multimedia, floor coverings, relocation
                services, and more to meet various workplace demands.
              </p>
            </div>
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
            <h3>Get any interior look you want!</h3>
            <p>
              So, which type of interior are you looking for? Are you planning
              to bring some trending and aesthetic shapes of furniture for your
              business? When you hire our team, you don’t have to worry about
              anything. Just sit back and relax to grab the best deals.
              <br />
              All sizes of projects are capable of being handled by us. To
              provide our customers with the greatest experience possible,
              larger projects are frequently supported by cooperation with
              expert professionals throughout the project's life. To fully
              comprehend our clients' demands, we collaborate closely with them.
            </p>
          </div>
          <div>
            <h3>Corporate Desk</h3>
            <p>
              The administrative staff is frequently the backbone of improving
              operations and operations, whether in a personal or accessible
              office space. Their furniture must boost productivity, give
              utility, offer user comfort, and maximise each work area. We
              collaborate closely with you to create specialised administrative
              solutions that consider your organisational structure, user
              demands, and job demands. You may be confident that our
              high-quality craftsmanship will last a long time and still look
              excellent.
              <br />
              There are many options for image-enhancing fabric and finishes for
              office desks. Additional choices include many tabletop forms,
              minimal privacy panels, ergonomic accessories, storage components,
              and paper-management alternatives. A range of secure storage
              choices led to Indicator task lighting, and desktop power
              completes the picture.
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
            <h3>Simple solutions to difficult issues</h3>
            <p>
              With over 50 completed projects, we have made a name for ourselves
              as India's top drywall contracting consultants. We have
              constructed Gypsum drywall for leading manufacturers.
            </p>
          </div>
          <div>
            <h3>Superior technical ability</h3>
            <p>
              We have a solid knowledge of every important facet of building
              gypsum walls. We take pleasure in being among the best issue
              solvers in our field. Team Interior Karwalo provides a full range
              of Gypsum wall design-build services, including conception,
              design, erection, and everything in between.
            </p>
          </div>
          <div>
            <h3>Highest standards</h3>
            <p>
              For security, installation, and execution, we constantly adhere to
              worldwide best standards. Our field personnel adheres to the best
              safety procedures since the workplace is our top priority. For the
              installation of Gypsum walls, we exclusively utilise wireless,
              high-quality equipment.
            </p>
          </div>
          <div style={{ display: "flex" }} className="c-container">
            <div style={{ position: "relative", flex: 1 }}>
              <img
                style={imgStyle}
                src={`${OfficefurnitureImage[2].before}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                Before
              </button>
            </div>

            <div style={{ position: "relative", flex: 1, marginLeft: "10px" }}>
              <img
                style={imgStyle}
                src={`${OfficefurnitureImage[2].after}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                After
              </button>
            </div>
          </div>
          <div>
            <h3>Block Gypsum Wall System</h3>
            <p>
              An engineered partition wall enclosure may be used in
              administrative buildings, workshops, and offices. Since Interior
              Karwalo manages everything from design requirements through
              project execution, these pre-engineered structures are promised to
              be water-free, mess-free, and headache-free. Consultants from
              different parties, such as architects and other relevant
              individuals like PMC.
              <br />
              Get a flexible partition wall with several applications. You may
              personalise our glass and partition walls to meet your needs. Any
              finish, including paint, wallpaper, laminates, etc., can be used
              on partitions. They can survive longer since they are a
              low-maintenance alternative to brick walls that are not unstable.
            </p>
          </div>
          <div>
            <h3>Sitting and Standing Desks</h3>
            <p>
              Say goodbye to your static surroundings and hello to better
              health. When individuals can quickly go from seated to standing at
              their desks during the day, it has been demonstrated in several
              ergonomic studies to be good for their health and productivity.
              <br />
              Interior Karwalo provides three adjustable-height options for
              various workplace user demands of furniture that rapidly changes
              and boosts flexibility to expertly handle electrical,
              counterbalanced, or crank projects.
            </p>
          </div>
          <div>
            <h3>Workstations</h3>
            <p>
              High walls, short walls, or no walls; room for four-person teams
              or an entire department; overhead shelving for wardrobe cabinets;
              designated stations or shared workstations. The list goes on are
              just a few of the diverse demands different teams may have. Since
              we know this, we offer many ideas to address each team's limitless
              demands and help you develop adaptable solutions. Further tweaking
              workstations for a perfect fit is simple with an online design
              workshop in which you are matched with a design expert.
            </p>
          </div>
          <div>
            <h3>Customer service desk</h3>
            <p>
              Provide the customer support team employees with the workspaces
              they require, such as open workstations to foster team spirit or
              more enclosed workstations to reduce visual or aural distractions
              when processing sensitive data. To help students succeed, add-ons,
              including marking boards, panels, monitors, arms, and locked
              drawers, may be used. Use every sqft of your area by working with
              our design specialists to build station designs that support the
              objectives of your company and our exclusive built-to-the-inch
              panel system.
            </p>
          </div>
          <div style={{ display: "flex" }} className="c-container">
            <div style={{ position: "relative", flex: 1 }}>
              <img
                style={imgStyle}
                src={`${OfficefurnitureImage[1].before}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                Before
              </button>
            </div>

            <div style={{ position: "relative", flex: 1, marginLeft: "10px" }}>
              <img
                style={imgStyle}
                src={`${OfficefurnitureImage[1].after}`}
                alt="interior design"
              />
              <button className="c-btn" style={{ position: "absolute" }}>
                After
              </button>
            </div>
          </div>
          <div>
            <h3>Reception furniture</h3>
            <p>
              Put your finest foot forth with administration furniture that is
              both functional and beautiful since first impressions count. Your
              welcome desks will create the right environment for productive
              interactions since they combine user comfort, job functionality,
              high-quality craftsmanship, integrated storage, and various
              image-enhancing colour options into a single solution.
              <br />
              Pick a conventional design and alter it to suit your needs, or use
              your creativity to create a one-of-a-kind design. For anything you
              may imagine, our designers will collaborate with you to make it a
              reality, and we promise it will last for many years.
            </p>
          </div>
          <div>
            <h3>Tables</h3>
            <p>
              Tables are the hidden heroes of most companies since they may be
              found in corner offices, boardrooms, training rooms, and
              lunchrooms. Tables with casters may be quickly moved or wheeled to
              any location where people need to assemble. With many different
              form possibilities, these workplace elements can elevate the look
              of your workplace.
              <br />
              Do you also want to add all the above-discussed furniture in your
              workplace? If you want to elevate the look of your workplace in
              the best possible manner, we, the Interior Karwalo, can help you.
              You can contact our office furniture interior consultant team over
              call & mail for further details.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OfficeFurnitue;
